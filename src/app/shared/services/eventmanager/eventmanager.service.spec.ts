import { TestBed } from '@angular/core/testing';

import { EventmanagerService } from './eventmanager.service';

describe('EventmanagerService', () => {
  let service: EventmanagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventmanagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
