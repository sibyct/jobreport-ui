import {  Routes } from '@angular/router';
import {LoginComponent} from '../modules/login';
import{ MainComponent} from '../modules/main';

export const ROUTES:Routes = [{
    component: LoginComponent,
    path:'login'
},{
    component: MainComponent,
    path:'main'
},{ 
    path: '', 
    redirectTo: '/login',
    pathMatch: 'full' 
}]