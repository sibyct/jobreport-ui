import { Component, OnInit, Input } from '@angular/core';
import { ControlContainer,FormGroupDirective} from '@angular/forms';

import {IDyamicComponentConfig} from '../../types/formtypes';
@Component({
  selector: 'jr-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class TextComponent implements OnInit {

  @Input() config:IDyamicComponentConfig;

  @Input() fieldValue:string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
