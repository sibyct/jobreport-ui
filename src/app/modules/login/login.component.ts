import { Component, OnInit, Inject } from '@angular/core';
import {HttpService} from '@shared/services/http/http.service';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';

import {URL_TOKEN,JOB_REPORT_URLS} from '@shared/constants/url.constants';
@Component({
  selector: 'jr-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[{
    provide: URL_TOKEN, useValue: JOB_REPORT_URLS
  }]
})
export class LoginComponent implements OnInit {

  constructor(
      private http:HttpService, private router:Router,
      @Inject(URL_TOKEN) public url: any) { }
 
  user:{username:string,password:string} = {
    username:'',
    password:''
  }
  ngOnInit(): void {
  }
  submitLoginForm(loginForm:NgForm): void{
    if(!loginForm.valid){
      return;
    }

    this.http.post(this.url.login,this.user)
      .then((response)=>{
        this.router.navigate(['/main/jobreport']);
      })
  }

}
