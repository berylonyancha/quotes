import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quotes';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
  newQuote= new Quote(4,"","");
  @Output() addQuote=new EventEmitter<Quote>();

  submitGoal(){
    this.addQuote.emit(this.newQuote);
  }
  constructor() { }

  ngOnInit() {
  }

}
