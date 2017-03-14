import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {OrderRow} from "../order-row.model";
import {ReduceUtil} from "../reduce-util.model";

@Component({
  selector: 'app-order-rows',
  templateUrl: './order-rows.component.html',
  styleUrls: ['./order-rows.component.css']
})
export class OrderRowsComponent implements OnInit {

  @Input() rows : OrderRow[];

  @Output("remove") removeEmitter = new EventEmitter<OrderRow>();

  constructor() { }

  ngOnInit() {
  }


  totalHT(){
    return this.rows && this.rows.map(row => row.ht() ).reduce( ReduceUtil.total,0);
  }

  totalTTC(){
    return this.rows &&  this.rows.map(row => row.ttc() ).reduce( ReduceUtil.total,0);
  }

  isBig(row){
    return row.ht()>=100;
  }

  emitRemove(row : OrderRow){
    this.removeEmitter.emit(row);
  }



}
