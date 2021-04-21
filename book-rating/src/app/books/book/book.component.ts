import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {

  @Input()
  book: Book;

  @Output()
  rateDown = new EventEmitter<Book>();

  @Output()
  rateUp = new EventEmitter<Book>();

  doRateDown(): void {
    this.rateDown.next(this.book);
  }

  doRateUp(): void {
    this.rateUp.next(this.book);
  }

  get stars(): undefined[] {
    return new Array(this.book.rating);
  }
}
