import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SucessComponent } from './pages/sucess/sucess.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, SucessComponent],
  template: `
  <router-outlet />
  `,
})
export class AppComponent {

}
