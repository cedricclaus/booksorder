import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderRootComponent } from './order-root.component';
import {FormsModule} from "@angular/forms";
import {OrderRowsComponent} from "../order-rows/order-rows.component";
import {OrderManualFormComponent} from "../order-manual-form/order-manual-form.component";
import {OrderCatalogFormComponent} from "../order-catalog-form/order-catalog-form.component";
import {CatalogService} from "../catalog.service";
import {Observable} from "rxjs";
import {Book} from "../book.model";
import {OrderRow} from "../order-row.model";
import {By} from "@angular/platform-browser";


class MockCatalogService{

  getList(): Observable<Book[]>{
   return Observable.of([
     {title:"aaa",author:"xxx",price : 5.50},
     {title:"bbb",author:"yyy",price : 6.60},
     {title:"ccc",author:"zzz",price : 7.70},
   ] );
 }

}


describe('OrderRootComponent', () => {
  let component: OrderRootComponent;
  let fixture: ComponentFixture<OrderRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports : [FormsModule],
      declarations: [ OrderRootComponent,OrderRowsComponent, OrderManualFormComponent, OrderCatalogFormComponent ],
      providers : [{provide : CatalogService, useClass : MockCatalogService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('should add new row from book catalog', () => {
    component.rows = [
      new OrderRow("a","x",1.50,2),
    ]
    fixture.detectChanges();
    let form = fixture.debugElement.query(By.css('form'));

    let inputQuantity = form.query(By.css('[name=quantity]'));
    let select = form.query(By.css('[name=selected]'));

    inputQuantity.triggerEventHandler('ngModelChange',3);
    select.triggerEventHandler('ngModelChange',{title:"bbb",author:"yyy",price : 6.60});
    form.triggerEventHandler('ngSubmit',null);

    fixture.detectChanges()

    let tr = fixture.debugElement.queryAll(By.css('.order-row'));
    expect(tr.length).toEqual(2);



  });
});
