import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

@Component({
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, RouterLink, RouterLinkActive, MatButtonModule],
  selector: 'df-root',
  template: `
      <mat-toolbar color="primary">
          <a routerLink="defer-loading" routerLinkActive="active" mat-flat-button color="primary">Defer Loading</a>
          <a routerLink="control-flow" routerLinkActive="active" mat-flat-button color="primary">Control Flow</a>
      </mat-toolbar>
      <router-outlet/>
  `,
  styles: `

      router-outlet {
        ::ng-deep + * {
          padding: 20px;
        }
      }
  `
})
export class AppComponent {
}
