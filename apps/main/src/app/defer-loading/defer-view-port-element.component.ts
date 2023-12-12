import {Component} from '@angular/core';
import {AsyncPipe} from '@angular/common';
import {DeferChildComponent} from "./defer-child.component";

@Component({
  selector: 'df-defer-view-port-element',
  standalone: true,
  imports: [AsyncPipe, DeferChildComponent],
  template: `



      <div class="defer-block">
          @defer (on viewport(greeting)) {
              <df-defer-child/>

          } @placeholder {
              Placeholder
          }
      </div>

      <div class="long-div"></div>

      <div #greeting>Hello!</div>

  `,
  styles: `

    .long-div {
      height: 1000px;
      overflow: auto;
    }

    .defer-block {
      position: fixed;
    }
  `,
})
export default class DeferViewPortElementComponent {


}
