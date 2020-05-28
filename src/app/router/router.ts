import {  Routes } from '@angular/router';
import {LoginComponent} from '../modules/login';
import{ MainComponent} from '../modules/main';
import {JobreportComponent} from '../modules/jobreport';
import {CreatereportComponent} from '../modules/createreport';
import {DashboardComponent} from '../modules/dashboard/dashboard.component';
import {UsermanagementComponent} from '../modules/usermanagement/usermanagement.component';

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
    },{
        component: DashboardComponent,
        path:'dashboard'
    },{
        component: UsermanagementComponent,
        path:'usermanagement'
    }]
},{ 
    path: '', 
    redirectTo: '/login',
    pathMatch: 'full' 
}]