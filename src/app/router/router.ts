import {  Routes } from '@angular/router';
import {LoginComponent} from '@feature/login';
import{ MainComponent} from '@feature//main';
import {JobreportComponent} from '@feature/jobreport';
import {CreatereportComponent} from '@feature/createreport';
import {DashboardComponent} from '@feature/dashboard/dashboard.component';
import {UsermanagementComponent} from '@feature/usermanagement/usermanagement.component';

import {CreatereportresolverService} from '@feature/createreport';
import {ReportdetailsComponent} from '@feature/reportdetails/reportdetails.component';
import {PaymentComponent} from '@feature/payment/payment.component';

export const ROUTES:Routes = [{
    component: LoginComponent,
    path:'login'
},{
    component: MainComponent,
    path:'',
    children:[{
        component: JobreportComponent,
        path:'jobreport',
    },{
        component: CreatereportComponent,
        path:'createreport',
        resolve:{'reportList':CreatereportresolverService}
    },{
        component: DashboardComponent,
        path:'dashboard'
    },{
        component: UsermanagementComponent,
        path:'usermanagement'
    },{
        component: ReportdetailsComponent,
        path:':id',
        children:[{
            path:'payment',
            component:PaymentComponent
        },{
            path:'customer',
            component:PaymentComponent
        },{
            path:'job',
            component:PaymentComponent
        }]
    }]
},{ 
    path: '', 
    redirectTo: '/login',
    pathMatch: 'full' 
}]