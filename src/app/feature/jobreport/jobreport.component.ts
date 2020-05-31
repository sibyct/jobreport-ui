import { Component, Inject } from '@angular/core';
import {TABLE_CONFIG_TOKEN,tableColumns} from './config';
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
export class JobreportComponent{
  
  data = [];

  searchCriteria:any = {};

  constructor(@Inject(TABLE_CONFIG_TOKEN) public tableColumns: any[]) { }

  searchReports() :void{

  }

}
