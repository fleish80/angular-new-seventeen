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

      <mat-toolbar color="warn">
          <a routerLink="defer-timer" routerLinkActive="active" mat-flat-button color="warn">Timer</a>
          <a routerLink="defer-timer-native" routerLinkActive="active" mat-flat-button color="warn">Timer Native</a>
          <a routerLink="defer-placeholder-minimum" routerLinkActive="active" mat-flat-button color="warn">Placeholder Minimum</a>
          <a routerLink="defer-interaction" routerLinkActive="active" mat-flat-button color="warn">Interaction</a>
          <a routerLink="defer-interaction-button" routerLinkActive="active" mat-flat-button color="warn">Interaction Button</a>
          <a routerLink="defer-hover" routerLinkActive="active" mat-flat-button color="warn">Hover</a>
          <a routerLink="defer-hover-element" routerLinkActive="active" mat-flat-button color="warn">Hover Element</a>
          <a routerLink="defer-view-port-timer" routerLinkActive="active" mat-flat-button color="warn">View Port Timer</a>
          <a routerLink="defer-view-port-element" routerLinkActive="active" mat-flat-button color="warn">View Port Element</a>
          <a routerLink="defer-prefetch" routerLinkActive="active" mat-flat-button color="warn">Prefetch</a>
          <a routerLink="defer-testing" routerLinkActive="active" mat-flat-button color="warn">Testing</a>
          <a routerLink="defer-loading-error" routerLinkActive="active" mat-flat-button color="warn">Error</a>
          <a routerLink="defer-idle" routerLinkActive="active" mat-flat-button color="warn">Idle</a>
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

      .active {
        font-weight: bold;
        font-size: 20px;

      }
  `,
})
export default class DeferLoadingComponent {
}
