import {Component, Input} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import StockModel from "../../../models/Stock";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-display-stock',
  templateUrl: './display-stock.component.html',
  styleUrls: ['./display-stock.component.css']
})
export class DisplayStockComponent {
  //API KEY: PAHV77MCV8C6HGIA
  @Input() searchStock = ""
  toSearch: string | null = '';
  stockData: any [] = []
  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(){
    this.toSearch = this.route.snapshot.paramMap.get('search')
    const apiKey = 'PAHV77MCV8C6HGIA';
    const apiUrl = 'https://www.alphavantage.co/query';
    const url = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol='+ this.toSearch + '&interval=5min&apikey=' + apiKey
    console.log(url)
    this.http.get(url).pipe().subscribe(data => {
      
    });
  }



}
