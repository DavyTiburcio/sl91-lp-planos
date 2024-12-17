import { Injectable } from '@angular/core';

declare let fbq: any; // Declaração para o Meta Pixel Code

@Injectable({
  providedIn: 'root'
})
export class FacebookPixelService {

  constructor() {}

  // Dispara o evento PageView padrão
  trackPageView(): void {
    if (typeof fbq === 'function') {
      fbq('track', 'PageView');
      console.log('Facebook Pixel: PageView event fired');
    }
  }

  // Dispara um evento personalizado
  trackEvent(eventName: string, params?: object): void {
    if (typeof fbq === 'function') {
      fbq('track', eventName, params);
      console.log(`Facebook Pixel: ${eventName} event fired`, params);
    }
  }
}
