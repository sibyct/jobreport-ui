import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jr-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }
  navlist:any = [];
  ngOnInit(): void {
    this.navlist = [{
      label:'Dashboard',
      icon:'dashboard',
      routerLink:'/main/dashboard'
    },{
      label:'Report',
      icon:'file_copy',
      routerLink:'/main/jobreport'
    },{
      label:'User Management',
      icon:'supervisor_account',
      routerLink:'/main/usermanagement'
    }]
  }

}
