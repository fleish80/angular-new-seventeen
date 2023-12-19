import {Route} from "@angular/router";

export const controlFlowRoutes: Route[] = [
  { path: '', redirectTo: 'control-if', pathMatch: 'full' },
  { path: 'control-if', loadComponent: () => import('./control-if.component') },
];
