import {  Routes } from '@angular/router';
import {LoginComponent} from '../feature/login';
import{ MainComponent} from '../feature/main';
import {JobreportComponent} from '../feature/jobreport';
import {CreatereportComponent} from '../feature/createreport';
import {DashboardComponent} from '../feature/dashboard/dashboard.component';
import {UsermanagementComponent} from '../feature/usermanagement/usermanagement.component';

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