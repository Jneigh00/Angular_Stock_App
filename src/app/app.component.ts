import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './materialize.min.css']
})
export class AppComponent {
  title = 'Stocks-App';
  searchStock: string = "";

  sendStock(){
    console.log(this.searchStock)
  }
}
