import { Component, OnInit } from '@angular/core';
import { GoogleTagManagerService } from 'angular-google-tag-manager';

declare const gtag: Function;

@Component({
  selector: 'app-sucess',
  standalone: true,
  imports: [],
  templateUrl: './sucess.component.html',
  styleUrl: './sucess.component.scss'
})
export class SucessComponent implements OnInit{
  constructor(private gtmService: GoogleTagManagerService) {}

  ngOnInit() {
    this.gtmService.pushTag({
      event: 'conversion',
      pageName: 'sucesso'
    });
  }
}
