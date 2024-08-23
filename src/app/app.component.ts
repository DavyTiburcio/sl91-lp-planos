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

export class AppComponent implements OnInit{

  constructor(private router: Router){}

  ngOnInit():void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      if (event.url === '/sucesso') {
        gtag('event', 'conversion', {
          send_to: 'AW-16607127908',
          event_category: 'Submit lead form',
          event_label: 'ORRxCOuPmMsZEOTS8u49',
          value: 1,
        })
      }
    })
  }
}

