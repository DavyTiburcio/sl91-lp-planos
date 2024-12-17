import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SucessComponent } from './pages/sucess/sucess.component';
import { GoogleTagManagerService } from '../app/shared/services/google-tag-manager.service';
import { AnalyticsService } from './shared/services/analytics.service';
import { FacebookPixelService } from './shared/services/facebook-pixel.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, SucessComponent],
  template: `
  <router-outlet />
  `,
})

export class AppComponent implements OnInit{

  constructor(
    private router: Router,
    private gtmService: GoogleTagManagerService,
    private analyticsService: AnalyticsService,
    private fbPixelService: FacebookPixelService) {}

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
    this.fbPixelService.trackPageView();
  }
}

