import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule }    from '@angular/common/http';
import {HttpService} from './http/http.service';
import {I18nService} from './i18n/i18n.service';
import {LoaderService} from './loader/loader.service';

@NgModule({
  providers:[
    HttpService,
    I18nService,
    LoaderService
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[
    HttpClientModule
  ]
})
export class SharedserviceModule { }
