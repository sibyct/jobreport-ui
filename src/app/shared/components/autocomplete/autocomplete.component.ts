import { Component, OnInit, Input, forwardRef, OnDestroy} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

const noop = () => {
};

let nextUniqueId = 0;

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AutocompleteComponent),
    multi: true
};

@Component({
  selector: 'jr-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class AutocompleteComponent implements OnInit,ControlValueAccessor {
  
searchControl = new FormControl();
filteredOptions: Observable<any[]>;

  @Input() label:string = '';
  
  @Input() id:string = `jr-autocomplete-${nextUniqueId++}`;
  
  @Input() remote:boolean = false;

  @Input() url:string;

  @Input() 
  set options(opt){
    this.setOptions(opt)
  }
  get options(){
    return this.list;
  }
  private innerValue: any = '';

  list:any[] = [];

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

  constructor(){}

  ngOnInit(){
      this.isUrlProvided();
      this.setSearchType();
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
  private isUrlProvided(){
      if(this.remote){
          if(!this.url){
              throw "Please provide the URL";
              return;
          }
      }
  }
  setOptions(opt:any[]){
    this.list = opt;
    this.setLocalSearch();
  }
  private setSearchType(){
      if(this.remote){
          this.setRemoteSearch();
      }
      else{
        this.setLocalSearch();
      }
  }
  private setLocalSearch(){
    this.filteredOptions = this.searchControl.valueChanges
    .pipe(
      startWith(''),
      map(searchVal => typeof searchVal === 'string' ? searchVal :searchVal?.value),
      map(name => name ? this._filterOptions(name) : this.options.slice())
    );   
  }
  private setRemoteSearch(){

  }
  private _filterOptions(value: string): any[] {

    const filterValue = value.toLowerCase();
    return this.options.filter(opt => opt.value.toLowerCase().indexOf(filterValue) === 0);
  }
  displayFn(option :{value:string,id:number}): string | any{
    return option && (option.value || option);
  }

}
