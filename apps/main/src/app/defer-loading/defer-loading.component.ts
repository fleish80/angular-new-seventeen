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
          <a routerLink="defer-interaction" routerLinkActive="active" mat-flat-button color="accent">Interaction</a>
          <a routerLink="defer-interaction-button" routerLinkActive="active" mat-flat-button color="accent">Interaction Button</a>
          <a routerLink="defer-hover" routerLinkActive="active" mat-flat-button color="accent">Hover</a>
          <a routerLink="defer-hover-element" routerLinkActive="active" mat-flat-button color="accent">Hover Element</a>
          <a routerLink="defer-view-port-timer" routerLinkActive="active" mat-flat-button color="accent">View Port Timer</a>
          <a routerLink="defer-view-port-element" routerLinkActive="active" mat-flat-button color="accent">View Port Element</a>
          <a routerLink="defer-prefetch" routerLinkActive="active" mat-flat-button color="accent">Prefetch</a>
          <a routerLink="defer-testing" routerLinkActive="active" mat-flat-button color="accent">Testing</a>
          <a routerLink="defer-loading-error" routerLinkActive="active" mat-flat-button color="accent">Error</a>
          <a routerLink="defer-idle" routerLinkActive="active" mat-flat-button color="accent">Idle</a>
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
