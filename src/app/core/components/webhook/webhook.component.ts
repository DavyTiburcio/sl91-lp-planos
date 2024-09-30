import { Component, OnInit } from '@angular/core';
import { WebhookService } from '../../../shared/services/WebhookService.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-webhook',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './webhook.component.html',
  styleUrl: './webhook.component.scss'
})
export class WebhookComponent implements OnInit{
  data: any;

  constructor(private webhookService: WebhookService) {}

  ngOnInit() {
    // Chama o serviço para buscar os dados do webhook
    this.webhookService.getWebhookData().subscribe(
      (response) => {
        this.data = response;
      },
      (error) => {
        console.error('Erro ao buscar dados do webhook', error);
      }
    );
  }
}
