import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {formConfig} from './config';
@Component({
  selector: 'jr-createreport',
  templateUrl: './createreport.component.html',
  styleUrls: ['./createreport.component.css'],
  host:{
    class:'jr-block-element jr-full-size'
  }
})
export class CreatereportComponent implements OnInit {

  constructor() { }
  formConfig:any;
  ngOnInit(): void {
    this.formConfig = formConfig
    debugger;
  }

}
