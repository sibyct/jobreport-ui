import { InjectionToken } from '@angular/core';

export interface NavListType {
  name:string,
  icon:string,
  routerLink:string
}

export const Navlist = [{
    name:'dashboard',
    icon:'dashboard',
    routerLink:'/main/dashboard'
  },{
    name:'report',
    icon:'file_copy',
    routerLink:'/main/jobreport'
  },{
    name:'usermanagement',
    icon:'supervisor_account',
    routerLink:'/main/usermanagement'
  }];

export const NAV_LIST_CONFIG_TOKEN = new InjectionToken<string>('NavList');