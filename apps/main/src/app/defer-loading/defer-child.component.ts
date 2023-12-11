import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'df-defer-child',
  standalone: true,
  imports: [CommonModule],
  template: `<p>defered-child works!</p>`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeferChildComponent {}
