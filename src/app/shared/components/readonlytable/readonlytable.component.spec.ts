import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadonlytableComponent } from './readonlytable.component';

describe('ReadonlytableComponent', () => {
  let component: ReadonlytableComponent;
  let fixture: ComponentFixture<ReadonlytableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadonlytableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadonlytableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
