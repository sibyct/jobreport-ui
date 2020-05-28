import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders}    from '@angular/common/http';

interface httpHeader{
  headers:HttpHeaders
}

@Injectable()
export class HttpService {

  constructor(private http:HttpClient) { }
  
  get(url:string) :Promise<any>{
    return this.http
        .get<any>(url,this.getHttpHeader())
        .toPromise();
  }
  post(url:string, data:any) :Promise<any>{
    return this.http
      .post<any>(url,data,this.getHttpHeader())
      .toPromise();
  }
  put(url:string, data:any) :Promise<any>{
    return this.http
      .put<any>(url,data,this.getHttpHeader())
      .toPromise();
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
