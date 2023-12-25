import {Component, signal} from '@angular/core';
import {AsyncPipe} from '@angular/common';
import {DeferChildComponent} from "./defer-child.component";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {FormsModule} from "@angular/forms";


@Component({
  selector: 'df-defer-error',
  standalone: true,
  imports: [AsyncPipe, DeferChildComponent, MatCheckboxModule, FormsModule],
  template: `

      <mat-checkbox class="example-margin" [ngModel]="isCheckedDefer()" (change)="change()" color="primary">Open the network tab of the
          browser's developer tools, then check this checkbox to load the component
      </mat-checkbox>

      <br>

      @defer (when isCheckedDefer()) {
          <df-defer-child/>
      } @placeholder {
          <span>Placeholder</span>
      } @error {
          <span>Error</span>
      } @loading (minimum 1s) {
          <span>Loading...</span>
      }
  `,
  styles: ``,
})
export default class DeferLoadingErrorComponent {
  isCheckedDefer = signal(false);

  change() {
    this.isCheckedDefer.update(value => !value);
  }


}
