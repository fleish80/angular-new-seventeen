import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  { path: '', redirectTo: 'defer-loading', pathMatch: 'full' },
  { path: 'defer-loading', loadComponent: () => import('./defer-loading/defer-loading.component') }
];
