import { DOCUMENT } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { apiUrl } from './products.service';

@Injectable({
  providedIn: 'root',
})
export class PaypalService {
  apiUrl = apiUrl;
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private http: HttpClient
  ) {}

  public fetchPaypalClientId(): Observable<string> {
    return this.http.get(`${this.apiUrl}/config/paypal`, {
      responseType: 'text',
    });
  }

  public initiate(clientId: string): Observable<void> {
    const paypalScriptElement: HTMLScriptElement =
      this.document.createElement('script');

    paypalScriptElement.type = 'text/javascript';
    paypalScriptElement.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
    paypalScriptElement.id = 'paypal-script';

    this.document.head.appendChild(paypalScriptElement);

    return fromEvent<void>(paypalScriptElement, 'load').pipe(first());
  }

  public remove(): void {
    const paypalScriptElement = this.document.getElementById('paypal-script');
    if (paypalScriptElement)
      this.document.head.removeChild(paypalScriptElement);
  }
}
