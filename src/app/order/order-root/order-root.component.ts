import {Component, OnInit, OnDestroy} from '@angular/core';
import {OrderRow} from "../order-row.model";
import {ReduceUtil} from "../reduce-util.model";
import {CatalogService} from "../catalog.service";
import {Book} from "../book.model";

import {Subscription} from "rxjs";

@Component({
  selector: 'app-order-root',
  templateUrl: './order-root.component.html',
  styleUrls: ['./order-root.component.css']
})
export class OrderRootComponent implements OnInit,OnDestroy {

  rows : OrderRow[] = [new OrderRow("Titre", "author",7.40,3),
    new OrderRow("Titre2 ", "author2 ",10.40,1)];




  catalogForm : {
    selected? : Book,
    quantity? : number
  } = {};

  books : Book[];
  subscription : Subscription;

  //as the dependency is private, it will create an property with the dsame list
  constructor(private catalog : CatalogService) {}

  ngOnInit() {
   this.subscription =  this.catalog.getList().subscribe(
      books => this.books = books
    );
  }

  ngOnDestroy(): void {
    this.subscription && this.subscription.unsubscribe();
  }

  removeRow(row : OrderRow) :void {
    this.rows = this.rows.filter(r => r != row);
  }


  addRow(order:OrderRow){
    this.rows.push(order);
  }

  catalogAdd(){
    this.rows.push(new OrderRow(
      this.catalogForm.selected.title,
      this.catalogForm.selected.author,
      this.catalogForm.selected.price,
      this.catalogForm.quantity || 1))
    this.catalogForm = {};

  }

}
