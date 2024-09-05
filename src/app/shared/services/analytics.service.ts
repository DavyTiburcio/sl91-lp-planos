import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

declare let gtag: Function; // Declaração da função gtag global

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  constructor(private router: Router) {
    this.trackPageViews();
  }

  trackPageViews() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      const url = event.urlAfterRedirects;

      // Verifica se a rota é a de sucesso
      if (url === '/sucesso') {
        this.sendConversionEvent();
      }
    });
  }

  sendConversionEvent() {
    gtag('event', 'conversion', {
      'send_to': 'AW-16607127908/PKAvCJ2D7M8ZEOTS8u49', // Substitua pelo seu ID de conversão e rótulo
    });
  }
}
