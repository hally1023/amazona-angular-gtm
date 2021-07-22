import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from './products.service';

@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  apiUrl = apiUrl;

  constructor(private http: HttpClient) {}

  uploadProductImage(file: File): Observable<string> {
    const formData = new FormData();
    formData.append('image', file);
    return this.http.post(`${this.apiUrl}/uploads`, formData, {
      responseType: 'text',
    });
  }
}
