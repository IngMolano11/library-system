import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'catalogo', pathMatch: 'full' },
  {
    path: 'catalogo',
    loadComponent: () => 
      import('./components/catalog/catalog').then(m => m.Catalog)
  },
  { path: '**', redirectTo: 'catalogo' }
];
