import { TestBed } from '@angular/core/testing';

import { CreatereportresolverService } from './createreportresolver.service';

describe('CreatereportresolverService', () => {
  let service: CreatereportresolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreatereportresolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
