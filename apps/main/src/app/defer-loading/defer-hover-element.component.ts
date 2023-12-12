import {Component} from '@angular/core';
import {AsyncPipe} from '@angular/common';
import {DeferChildComponent} from "./defer-child.component";

@Component({
  selector: 'df-defer-hover-element',
  standalone: true,
  imports: [AsyncPipe, DeferChildComponent],
  template: `

      <div #greeting>Hello!</div>
      @defer (on hover(greeting)) {
          <df-defer-child/>
      } @placeholder {
          <div>Placeholder</div>
      }

  `,
  styles: ``,
})
export default class DeferHoverElementComponent {


}
