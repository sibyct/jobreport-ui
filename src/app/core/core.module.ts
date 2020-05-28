import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MaterialModule} from '@shared/material';
import {JrRouterModule} from '../router/jrrouter.module';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [ToolbarComponent, NavComponent],
  exports:[ToolbarComponent,NavComponent],
  imports: [
    CommonModule,
    MaterialModule,
    JrRouterModule
  ]
})
export class CoreModule { }
