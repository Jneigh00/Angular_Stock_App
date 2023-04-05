import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-display-stock',
  templateUrl: './display-stock.component.html',
  styleUrls: ['./display-stock.component.css']
})
export class DisplayStockComponent {
  @Input() searchStock? : string

  logTerm(){
    console.log("Comes from Parent: " + this.searchStock)
  }

}
