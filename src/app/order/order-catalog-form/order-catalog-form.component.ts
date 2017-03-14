import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Book} from "../book.model";
import {OrderRow} from "../order-row.model";

@Component({
  selector: 'app-order-catalog-form',
  templateUrl: './order-catalog-form.component.html',
  styleUrls: ['./order-catalog-form.component.css']
})
export class OrderCatalogFormComponent implements OnInit {

  @Input() books : Book[];

  @Output("add") addEmitter = new EventEmitter<OrderRow>();

  catalogForm : {
    selected? : Book,
    quantity? : number
  } = {};

  constructor() { }

  emitOrderRow(){
    this.addEmitter.emit(
      new OrderRow(
        this.catalogForm.selected.title,
        this.catalogForm.selected.author,
        this.catalogForm.selected.price,
        this.catalogForm.quantity || 1)
    )


    this.catalogForm = {};

  }



  ngOnInit() {
  }

}
