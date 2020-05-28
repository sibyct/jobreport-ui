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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
