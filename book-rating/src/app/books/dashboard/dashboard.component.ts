import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  books: Book[];

  // ExpressionChangedAfterItHasBeenCheckedError kann hier nicht entdeckt werden
  constructor() { }

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


}
