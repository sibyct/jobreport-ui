import { Component, OnInit, Input} from '@angular/core';
import { ControlContainer,FormGroupDirective} from '@angular/forms';

import {IDyamicComponentConfig} from '../../types/formtypes';

@Component({
  selector: 'jr-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }] 
})
export class AutocompleteComponent implements OnInit {
  options = [];

  @Input() config:IDyamicComponentConfig;

  @Input() fieldValue:string;

  constructor() { }

  ngOnInit(): void {
  }

}
