import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderRootComponent } from './order-root/order-root.component';
import {FormsModule} from '@angular/forms';
import {CatalogService} from "./catalog.service";
import { OrderRowsComponent } from './order-rows/order-rows.component';
import { OrderManualFormComponent } from './order-manual-form/order-manual-form.component';
import { OrderCatalogFormComponent } from './order-catalog-form/order-catalog-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports : [OrderRootComponent],
  declarations: [OrderRootComponent, OrderRowsComponent, OrderManualFormComponent, OrderCatalogFormComponent],
  providers : [CatalogService,
    // { provide : CatalogService,
    //   useClass : CatalogService
    // }
      ]
})
export class OrderModule { }
