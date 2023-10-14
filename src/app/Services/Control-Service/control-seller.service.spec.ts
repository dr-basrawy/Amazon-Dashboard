import { TestBed } from '@angular/core/testing';

import { ControlSellerService } from './control-seller.service';

describe('ControlSellerService', () => {
  let service: ControlSellerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControlSellerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
