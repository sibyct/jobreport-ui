import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jr-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  user:{username:string,password:string} = {
    username:'',
    password:''
  }
  ngOnInit(): void {
  }

}
