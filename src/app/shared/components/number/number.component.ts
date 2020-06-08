import {FocusMonitor} from '@angular/cdk/a11y';
import {coerceBooleanProperty} from '@angular/cdk/coercion';
import {Component, ElementRef, Input, OnDestroy, Optional, Self,AfterViewInit} from '@angular/core';
import {ControlValueAccessor, NgControl,FormControl, Validators} from '@angular/forms';
import {MatFormFieldControl} from '@angular/material/form-field';
import {Subject} from 'rxjs';

@Component({
  selector: 'jr-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css'],
  providers: [{provide: MatFormFieldControl, useExisting: NumberComponent}],
  host: {
    '[class.jr-num-input-element]': 'shouldLabelFloat',
    '[id]': 'id',
    '[attr.aria-describedby]': 'describedBy',
  }
})
export class NumberComponent implements ControlValueAccessor, MatFormFieldControl<any>, OnDestroy,AfterViewInit {

  numberControl:FormControl;
  inputEleRef:HTMLInputElement
  static nextId = 0;
  stateChanges = new Subject<void>();
  focused = false;
  errorState = false;
  controlType = 'numberonly-input';
  id = `numberonly-input-${NumberComponent.nextId++}`;
  describedBy = '';
  onChange = (_: any) => {};
  onTouched = () => {};

  get empty() {

    if(this.value){
      return false;
    }
    return true;
  }

  get shouldLabelFloat() { return this.focused || !this.empty; }

  @Input()
  get placeholder(): string { return this._placeholder; }
  set placeholder(value: string) {
    this._placeholder = value;
    this.stateChanges.next();
  }
  private _placeholder: string;

  @Input()
  get required(): boolean { return this._required; }
  set required(value: boolean) {
    this._required = coerceBooleanProperty(value);
    this.stateChanges.next();
  }
  private _required = false;

  @Input()
  get disabled(): boolean { return this._disabled; }
  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
    this.stateChanges.next();
  }
  private _disabled = false;

  @Input()
  get value(): string | null {
    if(this.numberControl.valid){
      return this.numberControl.value;
    }
    return null;
  }
  set value(d:string) {
    this.numberControl.setValue(d);
    this.stateChanges.next();
  }

  constructor(
    private _focusMonitor: FocusMonitor,
    private _elementRef: ElementRef<HTMLElement>,
    @Optional() @Self() public ngControl: NgControl
  ) {
      this.numberControl = new FormControl('',[Validators.required])
      _focusMonitor.monitor(_elementRef, true).subscribe(origin => {
        if (this.focused && !origin) {
          this.onTouched();
        }
        this.focused = !!origin;
        this.stateChanges.next();
      });
      if (this.ngControl != null) {
        this.ngControl.valueAccessor = this;
      }
   }
  ngOnDestroy() {
    this.stateChanges.complete();
    this._focusMonitor.stopMonitoring(this._elementRef);
  }
  ngAfterViewInit(){
    this.inputEleRef = this._elementRef.nativeElement.querySelector('input');
  }
  setDescribedByIds(ids: string[]) {
    this.describedBy = ids.join(' ');
  }

  onContainerClick(event: MouseEvent) {
    if ((event.target as Element).tagName.toLowerCase() != 'input') {
      this.inputEleRef!.focus();
    }
  }

  writeValue(v: string | null): void {
    this.value = v;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  _handleInput(): void {
     const initalValue = this.value;
    const newValue = initalValue.replace(/[^0-9]*/g, '');
    this.inputEleRef.value = newValue;
    this.value = newValue;
    this.onChange(Number(newValue));
  }

  static ngAcceptInputType_disabled: boolean | string | null | undefined;
  static ngAcceptInputType_required: boolean | string | null | undefined;

}
