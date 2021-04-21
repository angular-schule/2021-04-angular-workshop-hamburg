import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { concatMap, map, mergeMap } from 'rxjs/operators';
import { BookStoreService } from '../shared/book-store.service';


@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent {

  isbn$ = this.router.paramMap.pipe(
    map(paramMap => paramMap.get('isbn')),
    concatMap(isbn => this.bs.getSingle(isbn))
  );

  constructor(private router: ActivatedRoute,
              private bs: BookStoreService) {
  }

}
