import { Routes } from '@angular/router';
// COMPONENTS
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'sucesso',
    loadComponent: () => import('./pages/sucess/sucess.component').then((p) => p.SucessComponent),
  }
];
