import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SucessComponent } from './pages/sucess/sucess.component';

declare const gtag: Function;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, SucessComponent],
  template: `
  <router-outlet />
  `,
})

export class AppComponent implements OnInit{

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.handleRouteChange(event.urlAfterRedirects);
      }
    });
  }

  handleRouteChange(url: string): void {
    // Verifica se a rota é a específica que você deseja
    if (url === '/sucesso') {
      this.fireConversionTag();
    }
  }

  fireConversionTag(): void {
    // Dispara a tag de conversão do Google
    gtag('event', 'conversion', {
      'send_to': 'AW-16607127908',
    });
  }
}

