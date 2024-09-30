import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WebhookService {
  private apiUrl = 'https://www.saudeplanos.com/webhook-data';  // Endpoint da sua API backend

  constructor(private http: HttpClient) {}

  // Método para buscar os dados do webhook
  getWebhookData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
