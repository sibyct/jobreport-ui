import {  Routes } from '@angular/router';
import {LoginComponent} from '../modules/login';

export const ROUTES:Routes = [{
    component: LoginComponent,
    path:'login'
},{ 
    path: '', 
    redirectTo: '/login',
    pathMatch: 'full' 
}]