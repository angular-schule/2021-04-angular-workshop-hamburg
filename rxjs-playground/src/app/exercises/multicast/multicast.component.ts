import { Component, OnInit } from '@angular/core';
import { Subject, BehaviorSubject, ReplaySubject, Observable } from 'rxjs';
import { delay, share, shareReplay } from 'rxjs/operators';

import { MeasureValuesService } from './measure-values.service';
import { ExerciseService } from '../exercise.service';

@Component({
  selector: 'rxw-multicast',
  templateUrl: './multicast.component.html',
})
export class MulticastComponent implements OnInit {

  listeners = [];
  logStream$ = new ReplaySubject<string>();

  measureValues$: Observable<number>; // später: Subject<number>;

  constructor(private mvs: MeasureValuesService, private es: ExerciseService) { }

  ngOnInit() {
    /******************************/

    // 1. unchanged stream
    // this.measureValues$ = this.mvs.getValues();

    // 2. multicast mit Operator (share)
    this.measureValues$ = this.mvs.getValues().pipe(shareReplay(1))

    // 3. using Subjects directly
    // this.measureValues$ = new Subject<number>();
    // this.measureValues$ = new BehaviorSubject<number>(42);
    // this.mvs.getValues().pipe(delay(5000)).subscribe(this.measureValues$)

    // this.measureValues$ = new ReplaySubject<number>(1);
    // this.mvs.getValues().subscribe(this.measureValues$)

    /******************************/
  }

  addListener() {
    this.listeners.push(this.es.generateRandomString(5));
  }

  addConsoleListener() {
    const randomString = this.es.generateRandomString(5);
    this.measureValues$.subscribe(e => this.logStream$.next(`${randomString} ${e}`));
  }

}
