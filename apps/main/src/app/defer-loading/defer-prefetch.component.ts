import {Component} from '@angular/core';
import {AsyncPipe} from '@angular/common';
import {DeferChildComponent} from "./defer-child.component";

@Component({
  selector: 'df-defer-prefetch',
  standalone: true,
  imports: [AsyncPipe, DeferChildComponent],
  template: `

      <button type="button" #greeting>Hello!</button>
      <div #greeting>Hello!</div>
      @defer (on interaction(greeting); prefetch on hover(greeting)) {
          <df-defer-child/>
      } @placeholder {
          <div>Placeholder</div>
      }

  `,
  styles: ``,
})
export default class DeferPrefetchComponent {


}
