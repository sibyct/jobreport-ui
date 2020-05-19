import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MaterialModule} from '@shared/material'

@NgModule({
  declarations: [ToolbarComponent],
  exports:[ToolbarComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class CoreModule { }
