import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public logo: string = 'assets/logos/logo.webp';
  public trilogo: string = 'assets/logos/trilogo.webp';

  public open: boolean | null = null;
  public activeMobile(){
    this.open = !this.open;
  }
}
