import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jr-reportdetails',
  templateUrl: './reportdetails.component.html',
  styleUrls: ['./reportdetails.component.css']
})
export class ReportdetailsComponent implements OnInit {

  constructor() { }
  navLinks:Array<any>=[{
    path:'payment',
    label:'Payment'
  },{
    path:'customer',
    label:'customer Info'
  },{
    path:'job',
    label:'Report Info'
  }]
  ngOnInit(): void {
  }

}
