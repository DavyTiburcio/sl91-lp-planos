import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FacebookPixelService } from '../../shared/services/facebook-pixel.service';

@Component({
  selector: 'app-sucess',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sucess.component.html',
  styleUrl: './sucess.component.scss'
})
export class SucessComponent implements OnInit {
  constructor(private fbPixelService: FacebookPixelService){}

  ngOnInit(): void {
      this.fbPixelService.trackPageView();
  }
}
