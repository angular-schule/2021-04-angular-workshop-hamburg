import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  books: Book[];

  constructor(private br: BookRatingService) {
  }

  ngOnInit(): void {
    this.books = [{
      isbn: '000',
      title: 'Angular',
      description: 'tolles Buch',
      rating: 5
    }, {
      isbn: '111',
      title: 'AngularJS',
      description: 'altes Buch',
      rating: 2
    }, {
      isbn: '666',
      title: 'jQuery',
      description: 'alter Gaul',
      rating: 1
    }];
  }

  doRateDown(book: Book): void {
    const ratedBook = this.br.rateDown(book);
    this.updateAndSortBooks(ratedBook);
  }

  doRateUp(book: Book): void {
    const ratedBook = this.br.rateUp(book);
    // const ratedBook = {
    //   ...book,
    //   rating: book.rating < 5 ? book.rating + 1 : 5
    // };
    this.updateAndSortBooks(ratedBook);
  }

  updateAndSortBooks(ratedBook: Book): void {
    this.books = this.books
      .map(b => b.isbn === ratedBook.isbn ? ratedBook : b)
      .sort((a, b) => b.rating - a.rating);
  }
}
