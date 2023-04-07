import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayStockComponent } from './home/display-stock/display-stock.component';
import {FormsModule} from "@angular/forms";
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    DisplayStockComponent,
    HomeComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
