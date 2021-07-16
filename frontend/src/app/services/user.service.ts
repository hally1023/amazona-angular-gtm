import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthDetails } from '../models/auth-details';
import { UserDetails } from '../models/user-details';
import { apiUrl } from './products.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl = apiUrl;

  constructor(private http: HttpClient) {}

  signIn(user: { email: string; password: string }) {
    return this.http.post<AuthDetails>(`${this.apiUrl}/users/signin`, user);
  }

  register(user: { name: string; email: string; password: string }) {
    return this.http.post<AuthDetails>(`${this.apiUrl}/users/register`, user);
  }

  detailsUser(userId: string) {
    return this.http.get<UserDetails>(`${this.apiUrl}/users/${userId}`);
  }
  updateUserProfile(
    user: Partial<{ name: string; email: string; password: string }>
  ) {
    return this.http.put<UserDetails>(`${apiUrl}/users/profile`, user);
  }
}
