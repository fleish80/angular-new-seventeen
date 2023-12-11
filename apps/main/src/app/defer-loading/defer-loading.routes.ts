import { Route } from '@angular/router';

export const deferLoadingRoutes: Route[] = [
  { path: '', redirectTo: 'defer-loading', pathMatch: 'full' },
  { path: 'defer-timer', loadComponent: () => import('./defer-timer.component') }
];
