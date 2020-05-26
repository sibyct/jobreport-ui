import { 
  Component, 
  OnInit,
  ViewChild, 
  ViewContainerRef, 
  AfterViewInit,
  ComponentFactoryResolver,
  ComponentFactory,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';
import{MatCheckbox} from '@angular/material/checkbox';
import{MatRadioGroup} from '@angular/material/radio';
import {IDyamicComponentConfig,IDyamicformConfig} from '../../types/formtypes'; 
  
@Component({
  selector: 'jr-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class FormComponent {

  @Input('formConfig') formConfig : IDyamicformConfig;

  @ViewChild('textField',{static:true}) textField;

  @ViewChild('dateField',{static:true}) dateField;

  @ViewChild('autocompleteField',{static:true}) autocompleteField;

  @ViewChild('numberField',{static:true}) numberField;

  @ViewChild('checkbox',{static:true}) checkbox:MatCheckbox;

  @ViewChild('radio',{static:true}) radio:MatRadioGroup;

  @ViewChild('container',{static:true}) container;

  layout: string;
  
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  getComponentType(type:string) :any{

    switch(type){
      case 'text':{
        return this.textField;
      }
      case 'date':{
        return this.dateField
      }
      case 'autocomplete':{
        return this.autocompleteField
      }
      case 'container':{
        return this.container
      }
      case 'checkbox':{
        return this.checkbox
      }
      case 'radio':{
        return this.radio
      }
      
    }

  }
  getLayout(config:IDyamicComponentConfig | IDyamicformConfig) :string{
    return config.layout || 'column';
  }
  getLayoutGap(config:IDyamicComponentConfig | IDyamicformConfig) :string{
    return config.layout == 'row'?'15px':'0px';
  }

}
