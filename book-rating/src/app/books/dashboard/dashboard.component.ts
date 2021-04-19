import { Component, OnInit } from '@angular/core';
import { BooksRoutingModule } from '../books-routing.module';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  books: Book[] = [];

  constructor(
    private br: BookRatingService,
    private bs: BookStoreService) {
  }

  ngOnInit(): void {
    this.bs.getAll().subscribe(b => this.books = b);
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

  addBook(newBook: Book): void {
    this.books = [...this.books, newBook];
  }
}
