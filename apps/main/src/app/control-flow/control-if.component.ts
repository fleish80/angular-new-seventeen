import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatRadioModule} from "@angular/material/radio";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";

@Component({
  selector: 'df-control-if',
  standalone: true,
  imports: [
    MatRadioModule,
    FormsModule,
    MatInputModule
  ],
  template: `

      <p>
          <mat-form-field appearance="outline">
              <mat-label>a</mat-label>
              <input matInput type="number" [(ngModel)]="a">
              <mat-hint>Hint</mat-hint>
          </mat-form-field>
      </p>
      <p>
          <mat-form-field appearance="outline">
              <mat-label>b</mat-label>
              <input matInput type="number" [(ngModel)]="b">
              <mat-hint>Hint</mat-hint>
          </mat-form-field>
      </p>
      @if (a > b) {
          {{a}} is greater than {{b}}
      } @else if (b > a) {
          {{a}} is less than {{b}}
      } @else {
          {{a}} is equal to {{b}}
      }


  `,
  styles: `

  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class ControlIfComponent {
  a = 0;
  b = 0;
}
