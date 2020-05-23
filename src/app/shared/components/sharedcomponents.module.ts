import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AutocompleteComponent} from './autocomplete';
import {TextComponent} from './text';
import {FormComponent} from './form';
import {DatepickerComponent} from './datepicker';
import {MaterialModule} from '../material';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AutocompleteComponent,
    TextComponent,
    FormComponent,
    DatepickerComponent
  ],
  exports:[
    AutocompleteComponent,
    TextComponent,
    FormComponent,
    DatepickerComponent
  ],
  entryComponents:[
    AutocompleteComponent,
    TextComponent,
    DatepickerComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class SharedcomponentsModule { }
