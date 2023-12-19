import {Component} from '@angular/core';
import {AsyncPipe} from '@angular/common';
import {DeferChildComponent} from "./defer-child.component";

@Component({
  selector: 'df-defer-idle',
  standalone: true,
  imports: [AsyncPipe, DeferChildComponent],
  template: `

<!--      while the component is rendered, set network to offline-->
      @defer (on idle) {
          <df-defer-child/>
      } @placeholder {
          Placeholder
      } @loading {
          loading
      } @error {
          error
      }
  `,
  styles: ``,
})
export default class DeferIdleComponent {


}
