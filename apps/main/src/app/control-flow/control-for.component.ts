import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {MatRadioModule} from "@angular/material/radio";
import {FormBuilder, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
  selector: 'df-control-for',
  standalone: true,
  imports: [
    MatRadioModule,
    FormsModule,
    MatInputModule,
    MatCheckboxModule,
    ReactiveFormsModule
  ],
  template: `

      <section class="example-section" [formGroup]="toppings">
          <h4>Select your toppings:</h4>
          <p>
              <mat-checkbox formControlName="pepperoni">Pepperoni</mat-checkbox>
          </p>
          <p>
              <mat-checkbox formControlName="extraCheese">Extra Cheese</mat-checkbox>
          </p>
          <p>
              <mat-checkbox formControlName="mushroom">Mushroom</mat-checkbox>
          </p>
      </section>


      <ul>
          @for (item of toppingsList;track item;let index = $index, even = $even, first = $first, odd = $odd, last = $last, count = $count) {
              <li>
                  <ul>
                      <li>item: {{ item }}</li>
                      <li>index: {{ index }}</li>
                      <li>even: {{ even }}</li>
                      <li>odd: {{ odd }}</li>
                      <li>first: {{ first }}</li>
                      <li>last: {{ last }}</li>
                      <li>count: {{ count }}</li>
                      <li></li>
                  </ul>
              </li>

          } @empty {
              <li> There are no items.</li>
          }
      </ul>
  `,
  styles: `

  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class ControlForComponent {

  fb = inject(FormBuilder);

  toppings = this.fb.group({
    pepperoni: false,
    extraCheese: false,
    mushroom: false,
  });

  toppingsList: string[] = []

  constructor() {
    this.toppings.valueChanges.pipe(takeUntilDestroyed())
      .subscribe(tops => {
        this.toppingsList = [];
        if (tops.pepperoni) {
          this.toppingsList.push('pepperoni');
        }
        if (tops.extraCheese) {
          this.toppingsList.push('extraCheese');
        }
        if (tops.mushroom) {
          this.toppingsList.push('mushroom');
        }
      })
  }

}
