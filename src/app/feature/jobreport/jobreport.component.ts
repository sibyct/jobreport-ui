import { Component, Inject ,OnInit} from '@angular/core';
import { Router } from '@angular/router';

import {TABLE_CONFIG_TOKEN,tableColumns} from './config';
import {URL_TOKEN} from '@shared/constants/url.constants';
import {TableEvent} from '@shared/components/readonlytable/readonlytable.component';

import {HttpService} from '@shared/services/http/http.service';
@Component({
  selector: 'jr-jobreport',
  templateUrl: './jobreport.component.html',
  styleUrls: ['./jobreport.component.css'],
  host:{
    class:'jr-block-element jr-full-size'
  },
  providers:[{
    provide: TABLE_CONFIG_TOKEN, useValue: tableColumns
  }]
})
export class JobreportComponent implements OnInit{
  
  data = [];

  searchCriteria:any = {};

  constructor(
    private router: Router,
    @Inject(TABLE_CONFIG_TOKEN) public tableColumns: any[],
    @Inject(URL_TOKEN) public url,
    private http:HttpService
    ) { }
  ngOnInit(){
    
    this.http.get('/api/report/getreports').then((res)=>{
        this.data = res;
    })
  }
  searchReports() :void{

  }
  handleTableEvents(event:TableEvent){
    if(event.type=='url'){
      this.router.navigate([`${event.data.requestid}/payment`]);
    }
  }

}
