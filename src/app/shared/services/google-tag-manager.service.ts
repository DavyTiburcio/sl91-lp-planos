import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoogleTagManagerService {

  constructor() { }

  public pushEvent(event: any) {
    if (window && (window as any).dataLayer) {
      (window as any).dataLayer.push(event);
    }
  }
}
