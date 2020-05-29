import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {NgForm} from '@angular/forms';
import {HttpService} from '@shared/services/http/http.service';
@Component({
  selector: 'jr-createreport',
  templateUrl: './createreport.component.html',
  styleUrls: ['./createreport.component.css']
})
export class CreatereportComponent implements OnInit {

  data:any = {};
  typeOfService = [];
  co = [];
  constructor(private http:HttpService) { }
  ngOnInit(): void {
    this.populateDropdownlist();
  }
  createReport(form: NgForm) :void{
    if(!form.valid){
      return;
    }
    
  }
  populateDropdownlist():void{
    this.http.get('/api/report/initialize-page').then((res)=>{
      this.typeOfService = res.serviceType;
      this.co = res.co;
      debugger;
    })
  }

}
