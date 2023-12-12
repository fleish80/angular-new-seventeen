import {Component} from '@angular/core';
import {AsyncPipe} from '@angular/common';
import {DeferChildComponent} from "./defer-child.component";

@Component({
  selector: 'df-defer-view-port-timer',
  standalone: true,
  imports: [AsyncPipe, DeferChildComponent],
  template: `


      @defer (on viewport; on timer(10s)) {
          <df-defer-child/>
      } @placeholder {
          <div>Placeholder</div>
      }


  `,
  styles: `

    .long-div {
      height: 1000px;
    }
  `,
})
export default class DeferViewPortTimerComponent {


}
