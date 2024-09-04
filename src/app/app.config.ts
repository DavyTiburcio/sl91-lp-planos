import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';
import { GoogleTagManagerModule } from 'angular-google-tag-manager';
import { importProvidersFrom } from '@angular/core';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withHashLocation()),
    provideHttpClient(),
    importProvidersFrom(
      GoogleTagManagerModule.forRoot({ id: 'GTM-5GJZN7GT' })
    )
  ]
};
