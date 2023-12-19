import {Component, signal} from '@angular/core';
import {AsyncPipe} from '@angular/common';
import {DeferChildComponent} from "./defer-child.component";

@Component({
  selector: 'df-defer-error',
  standalone: true,
  imports: [AsyncPipe, DeferChildComponent],
  template: `

      <div>
          <input #checkboxDefer type="checkbox" [checked]="isCheckedDefer()" (change)="isCheckedDefer.set(checkboxDefer.checked)" id="checkboxDefer"/>
          <label for="checkboxDefer">Open the network tab of the browser's developer tools, then check this checkbox to load the component</label>
      </div>
      <br>

      @defer (when isCheckedDefer()) {
          <df-defer-child/>
      }
      @placeholder {
          <span>Placeholder</span>
      }
      @error {
          <span>Error</span>
      }
      @loading(minimum 1s) {
          <span>Loading...</span>
      }
  `,
  styles: ``,
})
export default class DeferLoadingErrorComponent {
  isCheckedDefer = signal(false);

}
