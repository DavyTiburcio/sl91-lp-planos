import { Routes } from '@angular/router';
// COMPONENTS
import { HomeComponent } from './pages/home/home.component';
import { SucessComponent } from './pages/sucess/sucess.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'sucesso',
    component: SucessComponent,
  },
];
