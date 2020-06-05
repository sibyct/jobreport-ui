import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders}    from '@angular/common/http';
import {LoaderService} from '../loader/loader.service';
import { rejects } from 'assert';
interface httpHeader{
  headers:HttpHeaders
}

@Injectable()
export class HttpService {

  constructor(private http:HttpClient, private loader:LoaderService) { }
  
  get(url:string) :Promise<any>{
    this.loader.start();
    return new Promise((resolve,reject)=>{
      this.http
          .get<any>(url,this.getHttpHeader())
          .toPromise()
          .then((res)=>{
            if(res){
              this.loader.clear();
              return resolve(res)
            }
          },(err)=>{
            this.loader.clear();
            return reject(err)
          });
      })    
  }
  post(url:string, data:any) :Promise<any>{
    this.loader.start();
    return new Promise((resolve,reject)=>{
      this.http
        .post<any>(url,data,this.getHttpHeader())
        .toPromise()
        .then((res)=>{
          if(res){
            this.loader.clear();
            return resolve(res)
          }
        },(err)=>{
          this.loader.clear();
          return reject(err)
        });
    })
  }
  put(url:string, data:any) :Promise<any>{
    this.loader.start();
    return new Promise((resolve,reject)=>{
    return this.http
      .put<any>(url,data,this.getHttpHeader())
      .toPromise().
      then((res)=>{
        if(res){
          this.loader.clear();
          return resolve(res)
        }
      },(err)=>{
        this.loader.clear();
        return reject(err)
      });
    })
  }
  private getHttpHeader() :httpHeader{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return httpOptions;
  }
}
