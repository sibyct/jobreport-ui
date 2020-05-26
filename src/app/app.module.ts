import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { JrRouterModule } from './router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{FormsModule} from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import{MaterialModule } from '@shared/material';

import { LoginComponent } from './modules/login/login.component';
import { MainComponent } from './modules/main/main.component';
import {CoreModule} from './core/core.module';
import { JobreportComponent } from './modules/jobreport/jobreport.component';
import { CreatereportComponent } from './modules/createreport/createreport.component';

import {SharedModule} from '@shared/shared.module';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    JobreportComponent,
    CreatereportComponent
  ],
  imports: [
    BrowserModule,
    JrRouterModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    CoreModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
