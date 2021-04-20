import { Component, OnInit } from '@angular/core';
import { Observable, of, from, timer, interval, ReplaySubject } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'rxw-creating',
  templateUrl: './creating.component.html',
})
export class CreatingComponent implements OnInit {

  logStream$ = new ReplaySubject<string | number>();

  ngOnInit() {
    /**
     * 1. Erstelle ein Observable und abonniere den Datenstrom.
     *    Probiere dazu die verschiedenen Creation Functions aus: of(), from(), timer(), interval()
     * 2. Implementiere außerdem ein Observable manuell, indem du den Konstruktor "new Observable()" nutzt.
     *
     * Tipps:
     * Zum Abonnieren kannst du einen (partiellen) Observer oder ein einzelnes next-Callback verwenden.
     * Du kannst die Methode this.log() verwenden, um eine Ausgabe in der schwarzen Box im Browser zu erzeugen.
     */

    /******************************/

    // 2.
    const observer = {
      next: e => this.log(e),
      error: err => this.log('ERROR: ' + err),
      complete: () => this.log('COMPLETE')
    };

    // 1.
    // const observable = of('😃', '😎', '🤬');
    const observable = new Observable<string>(subscriber => {

      debugger;
      subscriber.next('😃');
      const x1 = setTimeout(() => subscriber.next('😳'), 1000);
      const x2 = setTimeout(() => { subscriber.next('💩'), console.log('AHHHH Zombie code!') }, 2000);
      const x3 = setTimeout(() => subscriber.error('BOOHH!'), 3000);
      const x4 = setTimeout(() => subscriber.next('😳'), 4000);

      return () => {
        clearTimeout(x1);
        clearTimeout(x2);
        clearTimeout(x3);
        clearTimeout(x4);
      }
    });

    // 3.
    const subscription = observable.subscribe(observer);
    setTimeout(() => subscription.unsubscribe(), 1000);

    /******************************/
  }

  private log(msg: string | number) {
    this.logStream$.next(msg);
  }

}
