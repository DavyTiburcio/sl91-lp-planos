import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class apiService {

  httpClient = inject(HttpClient);
  urlApi = signal(environment.url);

}
