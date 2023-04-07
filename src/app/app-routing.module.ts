import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {DisplayStockComponent} from "./home/display-stock/display-stock.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'stock',
    component: DisplayStockComponent
  },
  {
    path: 'stock/:search',
    component: DisplayStockComponent
  }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
