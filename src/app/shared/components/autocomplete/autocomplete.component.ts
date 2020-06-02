import { Component, OnInit, Input, forwardRef, OnDestroy, Inject} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import {FormControl} from '@angular/forms';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs';
import {map, startWith, debounceTime, switchMap} from 'rxjs/operators';

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

  @Input() reqCodeId:number;

  @Input() url: string;

  @Input() 
  set options(opt){
    this.setOptions(opt)
  }
  get options(){
    return this.list;
  }
  private innerValue: any = '';

  list:any[] = [];

  loading:boolean = false;

  private actualurl:string;
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

  constructor(private http: HttpClient){}

  ngOnInit(){
      this.isUrlProvided();
      this.setUrl();
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
      if(!this.url){
        if(this.remote){
            if(!this.reqCodeId){
                throw "Please provide the Code ID";
            }
        }
      }
  }
  setOptions(opts:any[]){
    this.list = opts;
    this.setLocalSearch();
  }
  private setUrl():void{
    if(this.url){
      this.actualurl = this.url;
      return
    }
    if(this.remote){
      this.actualurl = `/api/report/getjrdropdownlist/${this.reqCodeId}`;
    }  
  }
  private setSearchType(){
      if(this.remote || this.url){
          this.setRemoteSearch();
      }
      else{
        this.setLocalSearch();
      } 
  }
  private setLocalSearch(){
    this.searchControl.valueChanges
    .pipe(
      startWith(''),
      map(searchVal => typeof searchVal === 'string' ? searchVal :searchVal?.value),
      map(name => name ? this._filterOptions(name) : this.options.slice())
    ).subscribe((result)=>{
      this.list = result;
    });   
  }
  private setRemoteSearch(){
    this.searchControl.valueChanges
    .pipe(
      debounceTime(500),
      startWith(''),
      map(searchVal => typeof searchVal === 'string' ? searchVal :searchVal?.value),
      switchMap(str => {
        return this._getList(str);
      })
    ).subscribe((response:any[])=>{
      this.loading = false;
      this.list = response
    }); 
  }
  private _getList(str:string):Observable<any>{
    this.loading = true;
    return this.http.get(`${this.actualurl}?searchKey=${str}`);
  }
  private _filterOptions(value: string): any[] {

    const filterValue = value.toLowerCase();
    return this.options.filter(opt => opt.value.toLowerCase().indexOf(filterValue) === 0);
  }
  displayFn(option :{value:string,id:number}): string | any{
    return option && (option.value || option);
  }

}
