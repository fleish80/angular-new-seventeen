import {Component} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";

@Component({
  selector: 'df-control-flow',
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
          <a routerLink="control-if" routerLinkActive="active" mat-flat-button color="warn">If</a>
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
export default class ControlFlowComponent {}
