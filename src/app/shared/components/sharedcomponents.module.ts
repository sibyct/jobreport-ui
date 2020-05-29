import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';

import {FormComponent} from './form';
import {MaterialModule} from '../material';
import {TextComponent} from './text';
import {DatepickerComponent} from './datepicker';
import {AutocompleteComponent} from './autocomplete';
import { RadioComponent } from './radio';
import { ReadonlytableComponent } from './readonlytable/readonlytable.component';

import {SharedpipeModule} from '../pipe/sharedpipe.module';

@NgModule({
  declarations: [
    FormComponent,
    AutocompleteComponent,
    TextComponent,
    DatepickerComponent,
    RadioComponent,
    ReadonlytableComponent
  ],
  exports:[
    FormComponent,
    AutocompleteComponent,
    TextComponent,
    DatepickerComponent,
    RadioComponent,
    ReadonlytableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    SharedpipeModule
  ]
})
export class SharedcomponentsModule { }
