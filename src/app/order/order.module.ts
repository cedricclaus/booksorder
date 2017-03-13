import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderRootComponent } from './order-root/order-root.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports : [OrderRootComponent],
  declarations: [OrderRootComponent]
})
export class OrderModule { }
