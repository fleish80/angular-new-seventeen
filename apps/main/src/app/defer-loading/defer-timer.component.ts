import {Component} from '@angular/core';
import {AsyncPipe} from '@angular/common';
import {delay, of} from "rxjs";
import {DeferChildComponent} from "./defer-child.component";

@Component({
  selector: 'df-defer-timer',
  standalone: true,
  imports: [AsyncPipe, DeferChildComponent],
  template: `

      @defer (when timer$ | async) {
          <df-defer-child/>
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
