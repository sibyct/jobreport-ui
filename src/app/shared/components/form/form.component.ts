import { 
  Component, 
  OnInit,
  ViewChild, 
  ViewContainerRef, 
  AfterViewInit,
  ComponentFactoryResolver,
  ComponentFactory,
  Input
} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

  import {TextComponent,DatepickerComponent,AutocompleteComponent} from '../index';
  import {IDyamicComponentConfig,IDyamicformConfig} from '../../types/formtypes'; 
  
@Component({
  selector: 'jr-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  dynamicFormGroup: FormGroup;

  @Input() config : IDyamicformConfig;
 
  @ViewChild("dynamicFormRef", {read: ViewContainerRef,static:true}) formcontainerRef: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    this.loadComponent()
  }
  loadComponent(){
    this.formcontainerRef.clear();
    if(this.config.items.length>0){
      const dynamicForControlObj = {};
      this.config.items.forEach((item)=>{
        const formCOntrol = new FormControl('');
        const dynamicFormControl = dynamicForControlObj[item.name] = formCOntrol;
        const componentType = this.getComponentType(item);
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);
        const componentRef = this.formcontainerRef.createComponent(componentFactory) as any;
        componentRef.instance.config = item;
      })
      this.dynamicFormGroup = new FormGroup(dynamicForControlObj);
    }

  }
  getComponentType(componentConfig: IDyamicComponentConfig) :any{

    switch(componentConfig.type){
      case 'text':{
        return TextComponent
      }
      case 'date':{
        return DatepickerComponent
      }
      case 'autocomplete':{
        return AutocompleteComponent
      }
    }

  }

}
