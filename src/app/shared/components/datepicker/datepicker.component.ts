import { Component, OnInit ,Input} from '@angular/core';
import { ControlContainer,FormGroupDirective} from '@angular/forms';

import {IDyamicComponentConfig} from '../../types/formtypes';

@Component({
  selector: 'jr-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
  
})
export class DatepickerComponent implements OnInit {

  @Input() config:IDyamicComponentConfig;

  @Input() fieldValue:string;

  constructor() { }

  ngOnInit(): void {
  }

}
