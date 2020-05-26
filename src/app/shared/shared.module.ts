import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedcomponentsModule} from './components/sharedcomponents.module';
import {SharedserviceModule} from './services/sharedservice.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedcomponentsModule,
    SharedserviceModule
  ],
  exports:[
    SharedcomponentsModule,
    SharedserviceModule
  ]
})
export class SharedModule { }
