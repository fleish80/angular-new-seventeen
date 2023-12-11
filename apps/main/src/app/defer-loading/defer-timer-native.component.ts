import {Component} from '@angular/core';
import {AsyncPipe} from '@angular/common';
import {DeferChildComponent} from "./defer-child.component";

@Component({
  selector: 'df-defer-timer',
  standalone: true,
  imports: [AsyncPipe, DeferChildComponent],
  template: `

      @defer (on timer(5s)) {
          <df-defer-child/>
      } @placeholder {
          Placeholder
      } @loading {
          loading
      }
  `,
  styles: ``,
})
export default class DeferTimerNativeComponent {


}
