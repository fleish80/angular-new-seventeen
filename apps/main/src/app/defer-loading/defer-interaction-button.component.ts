import {Component} from '@angular/core';
import {AsyncPipe} from '@angular/common';
import {DeferChildComponent} from "./defer-child.component";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'df-defer-interaction-button',
  standalone: true,
  imports: [AsyncPipe, DeferChildComponent, MatButtonModule],
  template: `

      <button mat-flat-button type="button" #greeting color="primary">Hello!</button>
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
