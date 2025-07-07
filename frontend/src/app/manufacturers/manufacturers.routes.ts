import { Routes } from '@angular/router';
import { ManufacturersPageComponent } from './pages/manufacturers-page/manufacturers-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ManufacturerLayoutComponent } from './layouts/manufacturer-layout/manufacturer-layout.component';

export const manufacturerRoutes: Routes = [
  {
    path: '',
    component: ManufacturerLayoutComponent,
    children: [
      {
        path: '',
        component: ManufacturersPageComponent,
      },
      {
        path: '**',
        component: NotFoundPageComponent,
      },
    ],
  },
];

export default manufacturerRoutes;
