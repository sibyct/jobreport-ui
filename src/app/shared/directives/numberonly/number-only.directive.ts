import { Directive ,ElementRef, HostListener} from '@angular/core';
import { NgModel } from '@angular/forms';

@Directive({
  selector: '[ngModel][jrNumberOnly]',
  providers: [NgModel],
})
export class NumberOnlyDirective {

  constructor(private model:NgModel, private _el: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange(event) {
    const initalValue = this._el.nativeElement.value;
    const newValue = initalValue.replace(/[^0-9]*/g, '');
       this._el.nativeElement.value = newValue;
       this.model.valueAccessor.writeValue(newValue);

    if ( initalValue !== this._el.nativeElement.value) {
      event.stopPropagation();
    }
  }

}
