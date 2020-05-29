import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {NgForm} from '@angular/forms';
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
  createReport(form: NgForm) :void{
    if(!form.valid){
      return;
    }

    debugger;
  }

}
