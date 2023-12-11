import {Component} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";

@Component({
  selector: 'df-loading',
  standalone: true,
  imports: [
    MatButtonModule,
    MatToolbarModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet
  ],
  template: `

      <mat-toolbar color="accent">
          <a routerLink="defer-timer" routerLinkActive="active" mat-flat-button color="accent">Timer</a>
          <a routerLink="defer-timer-native" routerLinkActive="active" mat-flat-button color="accent">Timer Native</a>
          <a routerLink="defer-placeholder-minimum" routerLinkActive="active" mat-flat-button color="accent">Placeholder Minimum</a>
      </mat-toolbar>
      <router-outlet/>

  `,
  styles: `
    :host {
      display: flex;
      flex-direction: column;
    }

      router-outlet {
        ::ng-deep + * {
          padding: 20px;
        }
      }
  `,
})
export default class DeferLoadingComponent {
}
