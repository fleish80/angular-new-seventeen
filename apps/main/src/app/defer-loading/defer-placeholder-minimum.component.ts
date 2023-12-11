import {Component} from '@angular/core';
import {AsyncPipe} from '@angular/common';
import {DeferChildComponent} from "./defer-child.component";

@Component({
  selector: 'df-defer-timer',
  standalone: true,
  imports: [AsyncPipe, DeferChildComponent],
  template: `

      @defer (on timer(1ms)) {
          <df-defer-child/>
      } @placeholder (minimum 5s) {
          Placeholder
      } @loading {
          loading
      }
  `,
  styles: ``,
})
export default class DeferPlaceholderMinimumComponent {


}
