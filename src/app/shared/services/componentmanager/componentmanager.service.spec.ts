import { TestBed } from '@angular/core/testing';

import { ComponentmanagerService } from './componentmanager.service';

describe('ComponentmanagerService', () => {
  let service: ComponentmanagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComponentmanagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
