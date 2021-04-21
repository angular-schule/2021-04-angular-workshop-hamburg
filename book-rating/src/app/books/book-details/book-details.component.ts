import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { catchError, concatMap, map, mergeMap, share, shareReplay, switchMap } from 'rxjs/operators';
import { BookStoreService } from '../shared/book-store.service';


@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent {

  book$ = this.router.paramMap.pipe(
    map(paramMap => paramMap.get('isbn')),
    switchMap(isbn => this.bs.getSingle(isbn)),
    catchError((err: HttpErrorResponse) => of({
      isbn: '000',
      title: 'FEHLER',
      description: err.message
    }))
  );

  showDetails = false;

  constructor(private router: ActivatedRoute,
              private bs: BookStoreService) {
  }

}
