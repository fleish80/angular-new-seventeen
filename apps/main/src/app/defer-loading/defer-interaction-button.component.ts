import {Component} from '@angular/core';
import {AsyncPipe} from '@angular/common';
import {DeferChildComponent} from "./defer-child.component";

@Component({
  selector: 'df-defer-interaction-button',
  standalone: true,
  imports: [AsyncPipe, DeferChildComponent],
  template: `

      <button type="button" #greeting>Hello!</button>
      @defer (on interaction(greeting)) {
          <df-defer-child/>
      } @placeholder {
          <div>Placeholder</div>
      }

  `,
  styles: ``,
})
export default class DeferInteractionButtonComponent {


}
