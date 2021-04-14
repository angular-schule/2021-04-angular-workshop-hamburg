import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  books: string[];

  // ExpressionChangedAfterItHasBeenCheckedError kann hier nicht entdeckt werden
  constructor() { }

  ngOnInit(): void {
    this.books = ['Angular', 'AngularJS', 'jQuery'];
  }


}
