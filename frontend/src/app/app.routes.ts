import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'manufacturers',
    loadChildren: () => import('../app/manufacturers/manufacturers.routes'),
  },
  {
    path: '**',
    redirectTo: 'manufacturers',
  },
];
