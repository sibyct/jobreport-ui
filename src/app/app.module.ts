import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { JrRouterModule } from './router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{FormsModule} from '@angular/forms';
import{MaterialModule } from '@shared/material';
import { LoginComponent } from './modules/login/login.component';
import {CoreModule} from './core/core.module';
import {SharedModule} from '@shared/shared.module';
import {PagesModule} from './modules/pages.module';
import{URL_TOKEN,JOB_REPORT_URLS} from '@shared/constants/url.constants';
import {CODE_TOKEN,CODES} from '@shared/constants/code.constants';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    JrRouterModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    CoreModule,
    SharedModule,
    PagesModule
  ],
  providers: [{
    provide: URL_TOKEN, useValue: JOB_REPORT_URLS
  },{
    provide: CODE_TOKEN, useValue: CODES
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
