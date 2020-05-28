import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jr-jobreport',
  templateUrl: './jobreport.component.html',
  styleUrls: ['./jobreport.component.css'],
  host:{
    class:'jr-block-element jr-full-size'
  }
})
export class JobreportComponent implements OnInit {
  columns = [{
    label:'Reference Number',
    dataIndex:'refNo'
  },{
    label:'Date',
    dataIndex:'date'
  },{
    label:'Mobile No',
    dataIndex:'mobileNumber'
  },{
    label:'Customer Approval',
    dataIndex:'customerApproval'
  }];
  data = [];

  searchCriteria:any = {};

  constructor() { }

  ngOnInit(): void {
  }
  searchReports() :void{

  }

}
