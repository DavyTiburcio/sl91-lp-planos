import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WebhookService {
  private apiUrl = 'http://localhost:4200/webhook-data';  // Endpoint da sua API backend

  constructor(private http: HttpClient) {}

  // Método para buscar os dados do webhook
  getWebhookData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
