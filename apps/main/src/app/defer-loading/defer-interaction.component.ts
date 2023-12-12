import {Component} from '@angular/core';
import {AsyncPipe} from '@angular/common';
import {DeferChildComponent} from "./defer-child.component";

@Component({
  selector: 'df-defer-interaction',
  standalone: true,
  imports: [AsyncPipe, DeferChildComponent],
  template: `

      @defer (on interaction) {
          <df-defer-child/>
      } @placeholder {
          <div>Placeholder</div>
      }

  `,
  styles: ``,
})
export default class DeferTimerNativeComponent {


}
