import { Component, OnInit } from '@angular/core';
import {OrderRow} from "../order-row.model";

@Component({
  selector: 'app-order-root',
  templateUrl: './order-root.component.html',
  styleUrls: ['./order-root.component.css']
})
export class OrderRootComponent implements OnInit {

  rows : OrderRow[] = [new OrderRow("Titre", "author",7.40,3),
    new OrderRow("Titre2 ", "author2 ",10.40,1)];

  constructor() {}

  removeRow(row : OrderRow) :void {
    this.rows = this.rows.filter(r => r != row);
  }

  ngOnInit() {
  }

}
