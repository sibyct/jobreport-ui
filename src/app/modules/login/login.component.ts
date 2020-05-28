import { Component, OnInit } from '@angular/core';
import {HttpService} from '@shared/services/http/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'jr-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http:HttpService, private router:Router) { }
  user:{username:string,password:string} = {
    username:'',
    password:''
  }
  ngOnInit(): void {
  }
  submitLoginForm(){

    this.http.post('/api/login',this.user)
      .then((response)=>{
        this.router.navigate(['/main/jobreport']);
      })
  }

}
