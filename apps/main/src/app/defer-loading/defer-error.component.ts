import {Component} from '@angular/core';
import {AsyncPipe} from '@angular/common';
import {DeferChildComponent} from "./defer-child.component";

@Component({
  selector: 'df-defer-error',
  standalone: true,
  imports: [AsyncPipe, DeferChildComponent],
  template: `

<!--      while the component is rendered, set network to offline-->
      @defer (on timer(15s)) {
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
export default class DeferErrorComponent {


}
