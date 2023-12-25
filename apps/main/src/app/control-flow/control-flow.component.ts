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
      <mat-toolbar color="accent">
          <a routerLink="control-if" routerLinkActive="active" mat-flat-button color="accent">Timer</a>
      </mat-toolbar>
      <router-outlet/>

  `,
  styles: ``,
})
export class ControlFlowComponent {}
