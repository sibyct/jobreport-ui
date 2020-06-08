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
import { MaskComponent } from './mask/mask.component';
import { NumberComponent } from './number/number.component';

@NgModule({
  declarations: [
    FormComponent,
    AutocompleteComponent,
    TextComponent,
    DatepickerComponent,
    RadioComponent,
    ReadonlytableComponent,
    MaskComponent,
    NumberComponent
  ],
  exports:[
    FormComponent,
    AutocompleteComponent,
    TextComponent,
    DatepickerComponent,
    RadioComponent,
    ReadonlytableComponent,
    MaskComponent,
    NumberComponent
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
