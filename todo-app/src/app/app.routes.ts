import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/home/home.component').then(x => x.HomeComponent),
  },
  // Optionally, add more routes here
  { path: '**', redirectTo: '' }, // Wildcard route to redirect unknown paths
];
