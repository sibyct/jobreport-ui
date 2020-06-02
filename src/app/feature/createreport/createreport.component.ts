import { Component, OnInit, Inject } from '@angular/core';
import {NgForm} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import {HttpService} from '@shared/services/http/http.service';
import {URL_TOKEN} from '@shared/constants/url.constants';
import {CODE_TOKEN} from '@shared/constants/code.constants';
import {LoaderService} from '@shared/services/loader/loader.service';
import {ReportModel} from './types';

@Component({
  selector: 'jr-createreport',
  templateUrl: './createreport.component.html',
  styleUrls: ['./createreport.component.css']
})
export class CreatereportComponent implements OnInit {
  
  reportModel:ReportModel = {};
  typeOfService = [];
  co = [];
  constructor(
    private http:HttpService,
    @Inject(URL_TOKEN) public url: any,
    @Inject(CODE_TOKEN) public code,
    private loader:LoaderService,
    private acivatedRoute:ActivatedRoute
    ) { }
  ngOnInit(): void {
    this.populateDropdownlist();
    this.reportModel.requestdate = new Date();
  }
  createReport(form: NgForm) :void{
    if(!form.valid){
      return;
    }
    this.reportModel.mobno = Number(this.reportModel.mobno);

    this.http.post(this.url.GENERATE_REPORT,this.reportModel).then((res)=>{
      
    })
  }
  populateDropdownlist():void{
    
    const reportList = this.acivatedRoute.snapshot.data['reportList'];
    this.typeOfService = reportList['serviceType'];
    this.co = reportList['co'];

  }

}
