import { TestBed } from '@angular/core/testing';

import { CricketerServiceService } from './cricketer-service.service';

describe('CricketerServiceService', () => {
  let service: CricketerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CricketerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
