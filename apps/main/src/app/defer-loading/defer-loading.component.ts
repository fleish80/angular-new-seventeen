import { Component } from '@angular/core';

@Component({
  selector: 'df-loading',
  standalone: true,
  imports: [],
  template: `<p>defer-loading works!</p>`,
  styles: `
    :host {
      display: flex;
    }
  `,
})
export default class DeferLoadingComponent {}
