import { Component, OnInit } from '@angular/core';

declare const gtag: Function;

@Component({
  selector: 'app-sucess',
  standalone: true,
  imports: [],
  templateUrl: './sucess.component.html',
  styleUrl: './sucess.component.scss'
})
export class SucessComponent implements OnInit {

  ngOnInit() {
    // Verifica se gtag está disponível e dispara o evento de conversão
    if (typeof gtag === 'function') {
      gtag('event', 'conversion', {
        'send_to': 'AW-16607127908',
      });
    }
  }
}
