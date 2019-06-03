import { Component, OnInit,Input } from '@angular/core';
import{Quote} from '../quotes'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  @Input() quote:any[];

  quotes = [
    new Quote(1, "Your grief path is yours alone, and no one else can walk it, and no one else can understand it", "Terri Irwin", new Date(2011,4,9)),

    new Quote(2, "When you want to take control of your life make the most of everything around you", "Ed Lester", new Date(2002,11,5)),

    new Quote(3, "Kaa mbali na life man", "Koffee", new Date(2019,1,21)),

    new Quote(4, "Its never that serious and if it is si ni life basi", "Beryl Onyancha", new Date(2019,6,2))

    

  ]
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id=quoteLength+1;
    quote.publishDate = new Date(quote.publishDate)
    this.quotes.push(quote)

}

  constructor() { }

  ngOnInit() {
  }

}
