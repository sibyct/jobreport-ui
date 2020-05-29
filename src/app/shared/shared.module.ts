import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedcomponentsModule} from './components/sharedcomponents.module';
import {SharedserviceModule} from './services/sharedservice.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { ShareddirectivesModule } from './directives/shareddirectives.module';
import { SharedpipeModule } from './pipe/sharedpipe.module';

@NgModule({
  imports: [
    CommonModule,
    SharedcomponentsModule,
    SharedserviceModule,
    FlexLayoutModule,
    ShareddirectivesModule,
    SharedpipeModule
  ],
  exports:[
    SharedcomponentsModule,
    SharedserviceModule,
    FlexLayoutModule,
    ShareddirectivesModule,
    SharedpipeModule
  ]
})
export class SharedModule { }
