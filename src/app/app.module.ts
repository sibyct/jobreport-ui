import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { JrRouterModule } from './router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{FormsModule} from '@angular/forms';
import{MaterialModule } from '@shared/material';

import { LoginComponent } from './modules/login/login.component';

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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
