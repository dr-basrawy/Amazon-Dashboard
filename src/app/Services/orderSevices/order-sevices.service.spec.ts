import { TestBed } from '@angular/core/testing';

import { OrderSevicesService } from './order-sevices.service';

describe('OrderSevicesService', () => {
  let service: OrderSevicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderSevicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
