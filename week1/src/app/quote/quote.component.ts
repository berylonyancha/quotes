import { Component, OnInit } from '@angular/core';
import{Quote} from '../quotes'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1, "Your grief path is yours alone, and no one else can walk it, and no one else can understand it", "Terri Irwin"),

    new Quote(2, "When you want to take control of your life and make the most of everything around you", "Ed Lester"),

    new Quote(3, "Its never that and if it is si ni life basi", "Beryl Onyancha")

  ]
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id=quoteLength+1;
    this.quotes.push(quote)

}

  constructor() { }

  ngOnInit() {
  }

}
