import {  Routes } from '@angular/router';
import {LoginComponent} from '../modules/login';
import{ MainComponent} from '../modules/main';
import {JobreportComponent} from '../modules/jobreport';
import {CreatereportComponent} from '../modules/createreport';

export const ROUTES:Routes = [{
    component: LoginComponent,
    path:'login'
},{
    component: MainComponent,
    path:'main',
    children:[{
        component: JobreportComponent,
        path:'jobreport'
    },{
        component: CreatereportComponent,
        path:'createreport'
    }]
},{ 
    path: '', 
    redirectTo: '/login',
    pathMatch: 'full' 
}]