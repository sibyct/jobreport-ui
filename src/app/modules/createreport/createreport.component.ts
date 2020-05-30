import { Component, OnInit, Inject } from '@angular/core';
import {NgForm} from '@angular/forms';
import {HttpService} from '@shared/services/http/http.service';
import {URL_TOKEN} from '@shared/constants/url.constants';
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
    @Inject(URL_TOKEN) public url: any
    ) { }
  ngOnInit(): void {
    this.populateDropdownlist();
  }
  createReport(form: NgForm) :void{
    if(!form.valid){
      return;
    }
    
  }
  populateDropdownlist():void{
    this.http.get(this.url.INITIALIZE_CREATEREPORT).then((res)=>{
      this.typeOfService = res.serviceType;
      this.co = res.co;
      debugger;
    })
  }

}
