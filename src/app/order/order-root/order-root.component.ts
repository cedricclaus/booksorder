import { Component, OnInit } from '@angular/core';
import {OrderRow} from "../order-row.model";
import {ReduceUtil} from "../reduce-util.model";

@Component({
  selector: 'app-order-root',
  templateUrl: './order-root.component.html',
  styleUrls: ['./order-root.component.css']
})
export class OrderRootComponent implements OnInit {

  rows : OrderRow[] = [new OrderRow("Titre", "author",7.40,3),
    new OrderRow("Titre2 ", "author2 ",10.40,1)];

  manualForm : OrderRow = new OrderRow();

  constructor() {}

  removeRow(row : OrderRow) :void {
    this.rows = this.rows.filter(r => r != row);
  }

  totalHT(){
    return this.rows.map(row => row.ht() ).reduce( ReduceUtil.total,0);
  }

  totalTTC(){
    return this.rows.map(row => row.ttc() ).reduce( ReduceUtil.total,0);
  }

  isBig(row){
    return row.ht()>=100;
  }

  manualAdd(){
    this.rows.push(this.manualForm);
    this.manualForm = new OrderRow();
  }

  ngOnInit() {
  }

}
