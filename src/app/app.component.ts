import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SucessComponent } from './pages/sucess/sucess.component';
import { filter } from 'rxjs';

declare const gtag: Function;
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, SucessComponent],
  template: `
  <router-outlet />
  `,
})

export class AppComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events
      .pipe(
        // Filtra apenas eventos de término de navegação
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe((event: NavigationEnd) => {
        // Verifica a rota específica
        if (event.url === '/sucesso') {
          // Dispara o evento para o Google Analytics
          gtag('event', 'page_view', {
            page_path: event.url,
            page_title: 'Sucesso',
            page_location: window.location.href,
          });
        }
      });
  }
}
