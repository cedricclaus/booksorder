import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {OrderRow} from "../order-row.model";

@Component({
  selector: 'app-order-manual-form',
  templateUrl: './order-manual-form.component.html',
  styleUrls: ['./order-manual-form.component.css']
})
export class OrderManualFormComponent implements OnInit {

  manualForm : OrderRow = new OrderRow();

  @Output("add") addEmitter = new EventEmitter<OrderRow>();

  constructor() { }

  emitAdd(){
    this.addEmitter.emit(this.manualForm);
    this.manualForm = new OrderRow();
  }

  ngOnInit() {
  }

}
