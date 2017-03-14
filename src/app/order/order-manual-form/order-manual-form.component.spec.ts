import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderManualFormComponent } from './order-manual-form.component';

describe('OrderManualFormComponent', () => {
  let component: OrderManualFormComponent;
  let fixture: ComponentFixture<OrderManualFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderManualFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderManualFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
