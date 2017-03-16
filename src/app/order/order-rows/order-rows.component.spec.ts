import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderRowsComponent } from './order-rows.component';
import {FormsModule} from "@angular/forms";
import {OrderRow} from "../order-row.model";
import {By} from "@angular/platform-browser";
import {LOCALE_ID} from "@angular/core";

describe('OrderRowsComponent', () => {
  let component: OrderRowsComponent;
  let fixture: ComponentFixture<OrderRowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports : [FormsModule],
      declarations: [ OrderRowsComponent ],
      providers : [
        {provide : LOCALE_ID , useValue:'fr-BE'}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderRowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should compute total', (done) => {
    component.rows = [
      new OrderRow("a","x" , 10.10,2),
      new OrderRow("b","y" , 20.20,1),
    ]
    expect(component.totalHT()).toBeCloseTo(40.40,2);
    fixture.detectChanges();
    let tr = fixture.debugElement.queryAll(By.css('.order-row'))
    expect(tr.length).toEqual(2);
    expect(tr[1].query(By.css('.order-author')).nativeElement.textContent).toEqual("y");

    // ngmodel is setted async --> promise
    fixture.whenStable().then(()=>{
      expect(tr[1].query(By.css('.order-quantity input')).nativeElement.value).toEqual("1");
    })
    expect(tr[1].query(By.css('.order-ht')).nativeElement.textContent).toEqual('20,20\xa0€');

    tr[1].query(By.css('.order-remove'))
    done();


  });

  fit('should compute trigger remove event', (done) => {
    component.rows = [
      new OrderRow("a","x" , 10.10,2),
      new OrderRow("b","y" , 20.20,1),
    ]

    fixture.detectChanges();
    let tr = fixture.debugElement.queryAll(By.css('.order-row'));
    let button = tr[1].query(By.css('.order-remove button'));

    component.removeEmitter.subscribe((event)=>{
      expect(event).toEqual(component.rows[1]);
      done();
    })

    //click on the button
    button.triggerEventHandler('click',null);


  });
});
