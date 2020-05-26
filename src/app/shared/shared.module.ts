import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedcomponentsModule} from './components/sharedcomponents.module';
import {SharedserviceModule} from './services/sharedservice.module';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedcomponentsModule,
    SharedserviceModule,
    FlexLayoutModule
  ],
  exports:[
    SharedcomponentsModule,
    SharedserviceModule,
    FlexLayoutModule
  ]
})
export class SharedModule { }
