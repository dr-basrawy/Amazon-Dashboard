import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlSellerComponent } from './control-seller.component';

describe('ControlSellerComponent', () => {
  let component: ControlSellerComponent;
  let fixture: ComponentFixture<ControlSellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlSellerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
