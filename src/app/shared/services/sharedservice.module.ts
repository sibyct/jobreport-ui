import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule }    from '@angular/common/http';
import {HttpService} from './http/http.service';


@NgModule({
  providers:[HttpService],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[HttpClientModule]
})
export class SharedserviceModule { }
