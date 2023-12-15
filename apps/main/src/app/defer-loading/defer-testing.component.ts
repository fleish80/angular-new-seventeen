import {Component} from '@angular/core';
import {DeferChildComponent} from "./defer-child.component";

@Component({
  selector: 'df-defer-testing',
  standalone: true,
  imports: [DeferChildComponent],
  template: `
      @defer (on timer(5s)){
          <df-defer-child/>
      } @placeholder {
          <div>Placeholder</div>
      } @loading {
          Loading
      }
  `,
  styles: ``,
})
export default class DeferTestingComponent {
}
