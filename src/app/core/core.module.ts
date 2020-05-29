import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MaterialModule} from '@shared/material';
import {JrRouterModule} from '../router/jrrouter.module';
import { NavComponent } from './nav/nav.component';
import {SharedpipeModule} from '@shared/pipe/sharedpipe.module';

@NgModule({
  declarations: [ToolbarComponent, NavComponent],
  exports:[ToolbarComponent,NavComponent],
  imports: [
    CommonModule,
    MaterialModule,
    JrRouterModule,
    SharedpipeModule
  ]
})
export class CoreModule { }
