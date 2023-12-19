import { Route } from '@angular/router';

export const deferLoadingRoutes: Route[] = [
  { path: 'defer-timer', redirectTo: 'defer-loading', pathMatch: 'full' },
  { path: 'defer-timer', loadComponent: () => import('./defer-timer.component') },
  { path: 'defer-timer-native', loadComponent: () => import('./defer-timer-native.component') },
  { path: 'defer-placeholder-minimum', loadComponent: () => import('./defer-placeholder-minimum.component') },
  { path: 'defer-interaction', loadComponent: () => import('./defer-interaction.component') },
  { path: 'defer-interaction-button', loadComponent: () => import('./defer-interaction-button.component') },
  { path: 'defer-hover', loadComponent: () => import('./defer-hover.component') },
  { path: 'defer-hover-element', loadComponent: () => import('./defer-hover-element.component') },
  { path: 'defer-view-port-timer', loadComponent: () => import('./defer-view-port-timer.component') },
  { path: 'defer-view-port-element', loadComponent: () => import('./defer-view-port-element.component') },
  { path: 'defer-prefetch', loadComponent: () => import('./defer-prefetch.component') },
  { path: 'defer-testing', loadComponent: () => import('./defer-testing.component') },
  { path: 'defer-loading-error', loadComponent: () => import('./defer-loading-error.component') },
  { path: 'defer-idle', loadComponent: () => import('./defer-idle.component') }
];
