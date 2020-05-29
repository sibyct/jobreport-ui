import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {I18nPipe} from './i18n/i18n.pipe';
import {SharedserviceModule} from '../services/sharedservice.module';

@NgModule({
  declarations: [I18nPipe],
  imports: [
    CommonModule,
    SharedserviceModule
  ],
  exports:[
    I18nPipe
  ]
})
export class SharedpipeModule { }
