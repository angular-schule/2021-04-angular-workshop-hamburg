import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent {

  isbn: string;

  constructor(private router: ActivatedRoute) {
    router.paramMap.subscribe(param => this.isbn = param.get('isbn'));
  }

}
