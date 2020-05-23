import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http"
@Component({
  selector: 'jr-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http:HttpClient) { }
  user:{username:string,password:string} = {
    username:'',
    password:''
  }
  formConfig = {
    name:'dynamic form',
    items:[{
      type:'text',
      label:'dsdsds'
    },{
      type:'date'
    },{
      type:'autocomplete'
    }]
  }
  ngOnInit(): void {
  }
  submitLoginForm(){
    this.http.post('/api/login',this.user).subscribe((res)=>{
      debugger;
    },(err)=>{
      debugger;
    })
  }

}
