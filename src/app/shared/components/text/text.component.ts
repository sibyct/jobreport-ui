import { Component ,forwardRef,Input,OnInit,OnDestroy} from '@angular/core';

import {IDyamicComponentConfig} from '../../types/formtypes';
import {ComponentmanagerService} from '../../services/componentmanager';

import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

const noop = () => {
};
let nextUniqueId = 0;
export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TextComponent),
    multi: true
};

@Component({
  selector: 'jr-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class TextComponent implements OnInit,OnDestroy,ControlValueAccessor{
  
  @Input() label:string = '';

  @Input() id:string = `jr-text-${nextUniqueId++}`;

  private innerValue: any = '';

  //Placeholders for the callbacks which are later provided
  //by the Control Value Accessor
  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;
  
  //get accessor
  get value(): any {
      return this.innerValue;
  };

  //set accessor including call the onchange callback
  set value(v: any) {
      if (v !== this.innerValue) {
          this.innerValue = v;
          this.onChangeCallback(v);
      }
  }

  constructor(private componentManager: ComponentmanagerService){

  }
  ngOnInit(){
    this.componentManager.setComponent(this.id,this);
  }
  //Set touched on blur
  onBlur() {
      this.onTouchedCallback();
  }

  //From ControlValueAccessor interface
  writeValue(value: any) {
      if (value !== this.innerValue) {
          this.innerValue = value;
      }
  }

  //From ControlValueAccessor interface
  registerOnChange(fn: any) {
      this.onChangeCallback = fn;
  }

  //From ControlValueAccessor interface
  registerOnTouched(fn: any) {
      this.onTouchedCallback = fn;
  }
  ngOnDestroy(){
    this.componentManager.removeCompoent(this.id);
  }
}
