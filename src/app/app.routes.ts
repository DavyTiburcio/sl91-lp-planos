import { Routes } from '@angular/router';
// COMPONENTS
import { HomeComponent } from './pages/home/home.component';
import { SucessComponent } from './pages/sucess/sucess.component';
import { WebhookComponent } from './core/components/webhook/webhook.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'sucesso',
    component: SucessComponent,
  },
  {
    path: 'webhook-data',
    component: WebhookComponent,
  },
];
