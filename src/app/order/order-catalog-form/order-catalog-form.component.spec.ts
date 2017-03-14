import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCatalogFormComponent } from './order-catalog-form.component';

describe('OrderCatalogFormComponent', () => {
  let component: OrderCatalogFormComponent;
  let fixture: ComponentFixture<OrderCatalogFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderCatalogFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderCatalogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
