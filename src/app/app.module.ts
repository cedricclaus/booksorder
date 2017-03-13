import { BrowserModule } from '@angular/platform-browser';
import {NgModule, LOCALE_ID} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {OrderModule} from "./order/order.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    OrderModule
  ],
  providers: [{provide:LOCALE_ID, useValue:'fr-BE'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
