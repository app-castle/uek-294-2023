import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from './user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  public register(email: string, password: string) {
    return this.http.post(this.apiUrl + 'register', {
      email,
      password,
    });
  }

  public login(email: string, password: string) {
    return this.http.post<LoginResponse>(this.apiUrl + 'login', {
      email,
      password,
    });
  }
}
