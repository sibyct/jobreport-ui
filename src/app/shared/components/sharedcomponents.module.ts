import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{FormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';

import {FormComponent} from './form';
import {MaterialModule} from '../material';
import {TextComponent} from './text';
import {DatepickerComponent} from './datepicker';
import {AutocompleteComponent} from './autocomplete';
import { RadioComponent } from './radio';

@NgModule({
  declarations: [
    FormComponent,
    AutocompleteComponent,
    TextComponent,
    DatepickerComponent,
    RadioComponent
  ],
  exports:[
    FormComponent,
    AutocompleteComponent,
    TextComponent,
    DatepickerComponent,
    RadioComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class SharedcomponentsModule { }
