import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SucessComponent } from './pages/sucess/sucess.component';
import { GoogleTagManagerService } from 'angular-google-tag-manager';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, SucessComponent],
  template: `
  <router-outlet />
  `,
})

export class AppComponent{
  constructor(
    private router: Router,
    private gtmService: GoogleTagManagerService
  ) {}

  ngOnInit() {
    // Rastrear mudanças de rota
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      if (event.urlAfterRedirects === '/sucesso') {
        // Enviar evento de conversão para o GTM
        this.gtmService.pushTag({
          event: 'conversion',
        });
      }
    });
  }
}

