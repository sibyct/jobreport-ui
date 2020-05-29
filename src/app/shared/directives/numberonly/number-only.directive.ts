import { Directive ,ElementRef, HostListener, forwardRef, Optional, Host} from '@angular/core';
import { 
  // NgModel, NG_VALUE_ACCESSOR,
   ControlValueAccessor 
  } 
   from '@angular/forms';

// export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
//   provide: NG_VALUE_ACCESSOR,
//   useExisting: forwardRef(() => NumberOnlyDirective),
//   multi: true
// };

@Directive({
  selector: '[ngModel][jrNumberOnly]',
  // providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
})
export class NumberOnlyDirective {

  constructor(private _el: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange(event) {
    const initalValue = this._el.nativeElement.value;
    const newValue = initalValue.replace(/[^0-9]*/g, '');
      this._el.nativeElement.value = newValue;
    if ( initalValue !== this._el.nativeElement.value) {
      event.stopPropagation();
    }
  }
  // onChange: Function = () => {};

  // onTouched: Function = () => {};

  // writeValue(val: string) : void {
  //   //this.ngModel = val;               
  // }

  // registerOnChange(fn: Function): void {
  //   this.onChange = fn;
  // }

  // registerOnTouched(fn: Function): void {
  //   this.onTouched = fn;
  // }

}
