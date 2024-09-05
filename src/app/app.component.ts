import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SucessComponent } from './pages/sucess/sucess.component';
import { GoogleTagManagerService } from '../app/shared/services/google-tag-manager.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, SucessComponent],
  template: `
  <router-outlet />
  `,
})

export class AppComponent{

  constructor(private router: Router, private gtmService: GoogleTagManagerService) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Verifica se a rota é 'sucesso'
        if (event.urlAfterRedirects === '/sucesso') {
          this.gtmService.pushEvent({
            'event': 'conversion',
            'conversionCategory': 'FormSubmission',
            'conversionAction': 'SubmitSuccess',
            'conversionLabel': 'SucessoPage'
          });
        }
      }
    });
  }
}

