import { Component } from '@angular/core';
import StockModel from "../../models/Stock";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'Stocks-App';
  searchStock: string = ""

  constructor(private router: Router) { }

  sendStock(){
    console.log(this.searchStock)
    this.router.navigate(['/stock', this.searchStock],)
  }
}
