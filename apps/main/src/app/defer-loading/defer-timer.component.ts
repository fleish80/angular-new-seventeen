import {Component} from '@angular/core';
import {AsyncPipe} from '@angular/common';
import {delay, of} from "rxjs";

@Component({
  selector: 'df-defer-timer',
  standalone: true,
  imports: [AsyncPipe],
  template: `

      @defer (when timer$ | async) {
          Defer
      } @placeholder {
          Placeholder
      } @loading {
          loading
      }
  `,
  styles: ``,
})
export default class DeferTimerComponent {

  timer$ = of(true)
    .pipe(delay(5000));
}
