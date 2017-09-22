import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Http} from "@angular/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {

  constructor(private http: Http) {
  }

  ngOnInit(): void {
    this.transactions = Observable.interval(5000).mergeMap(() => this.http.get("http://localhost:8080/transactions")).map(response => response.json());
  }

  transactions: Observable<any>;

  username: String;
  password: String;

  type: string;

  symbol: string;
  amount: number;
  side: string;
  limit: number;

  onSubmit() {
    alert(this.symbol);
  }
}
