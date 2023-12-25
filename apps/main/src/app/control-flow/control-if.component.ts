import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'df-control-if',
  standalone: true,
  imports: [],
  template: `<p>control-if works!</p>`,
  styles: `

  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class ControlIfComponent {}
