import { Component, OnInit, Inject } from '@angular/core';
import {NgForm} from '@angular/forms';
import {HttpService} from '@shared/services/http/http.service';
import {URL_TOKEN} from '@shared/constants/url.constants';
import {CODE_TOKEN} from '@shared/constants/code.constants';
import {LoaderService} from '@shared/services/loader/loader.service';
@Component({
  selector: 'jr-createreport',
  templateUrl: './createreport.component.html',
  styleUrls: ['./createreport.component.css']
})
export class CreatereportComponent implements OnInit {

  data:any = {};
  typeOfService = [];
  co = [];
  constructor(
    private http:HttpService,
    @Inject(URL_TOKEN) public url: any,
    @Inject(CODE_TOKEN) public code,
    private loader:LoaderService
    ) { }
  ngOnInit(): void {
    this.populateDropdownlist();
    this.data.enquiryDate = new Date();
  }
  createReport(form: NgForm) :void{
    if(!form.valid){
      return;
    }
    this.data.mobNo = Number(this.data.mobNo);
    debugger;
    this.http.post('/api/report/generatereport',this.data).then((res)=>{
      
    })
  }
  populateDropdownlist():void{
    this.loader.start();
    this.http.get(this.url.INITIALIZE_CREATEREPORT).then((res)=>{
      this.typeOfService = res.serviceType;
      this.co = res.co;
      this.loader.clear();
    })
  }

}
