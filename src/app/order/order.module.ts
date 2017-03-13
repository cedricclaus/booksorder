import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderRootComponent } from './order-root/order-root.component';
import {FormsModule} from '@angular/forms';
import {CatalogService} from "./catalog.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports : [OrderRootComponent],
  declarations: [OrderRootComponent],
  providers : [CatalogService,
    // { provide : CatalogService,
    //   useClass : CatalogService
    // }
      ]
})
export class OrderModule { }
