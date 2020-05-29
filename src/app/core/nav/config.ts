import { InjectionToken } from '@angular/core';

export const Navlist = [{
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
  }];

export const NAV_LIST_CONFIG_TOKEN = new InjectionToken<string>('NavList');