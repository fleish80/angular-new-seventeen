import {Route} from '@angular/router';

export const appRoutes: Route[] = [
  {path: '', redirectTo: 'defer-loading', pathMatch: 'full'},
  {
    path: 'defer-loading',
    loadChildren: () => import('./defer-loading/defer-loading.routes').then(r => r.deferLoadingRoutes),
    loadComponent: () => import('./defer-loading/defer-loading.component')
  }
];
