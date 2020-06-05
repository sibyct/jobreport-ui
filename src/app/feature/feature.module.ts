import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

import{MaterialModule } from '@shared/material';
import {SharedModule} from '@shared/shared.module';
import {CoreModule} from '../core/core.module';
import {JrRouterModule} from '../router/jrrouter.module';

import {LoginComponent} from './login';
import { MainComponent } from './main/main.component';
import { JobreportComponent } from './jobreport/jobreport.component';
import { CreatereportComponent } from './createreport/createreport.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsermanagementComponent } from './usermanagement/usermanagement.component';
import {CreatereportresolverService} from './createreport/createreportresolver.service';
import { ReportdetailsComponent } from './reportdetails/reportdetails.component';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  providers:[CreatereportresolverService],
  declarations: [
    MainComponent,
    JobreportComponent,
    CreatereportComponent,
    DashboardComponent,
    UsermanagementComponent,
    LoginComponent,
    ReportdetailsComponent,
    PaymentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    SharedModule,
    CoreModule,
    JrRouterModule
  ],
  exports:[
    MainComponent,
    JobreportComponent,
    CreatereportComponent,
    DashboardComponent,
    UsermanagementComponent,
    LoginComponent,
    ReportdetailsComponent,
    PaymentComponent
  ]
})
export class FeatureModule { }
