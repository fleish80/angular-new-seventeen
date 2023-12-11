import { Route } from '@angular/router';

export const deferLoadingRoutes: Route[] = [
  { path: '', redirectTo: 'defer-loading', pathMatch: 'full' },
  { path: 'defer-timer', loadComponent: () => import('./defer-timer.component') },
  { path: 'defer-timer-native', loadComponent: () => import('./defer-timer-native.component') },
  { path: 'defer-placeholder-minimum', loadComponent: () => import('./defer-placeholder-minimum.component') }
];
