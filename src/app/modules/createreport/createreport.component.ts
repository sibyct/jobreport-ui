import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {formConfig} from './config';
@Component({
  selector: 'jr-createreport',
  templateUrl: './createreport.component.html',
  styleUrls: ['./createreport.component.css']
})
export class CreatereportComponent implements OnInit {

  data:any = {};
  
  constructor() { }
  ngOnInit(): void {
  }

}
