import { Observable, switchMap, tap } from 'rxjs';
import { LoginCredentials } from './../modals/login.modal';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AppLoginService {
  constructor(private http: HttpClient) {}

  login(credentials: LoginCredentials): Observable<{ access_token: string }> {
    const url = 'http://localhost:3333/api/auth/login';

    return this.http
      .post<{ access_token: string }>(url, credentials, {
        headers: new HttpHeaders({
          NoAuthorization: 'NoAuthorization',
        }),
      })
      .pipe(
        tap((response) => {
          localStorage.setItem('token', response.access_token);
        })
      );
  }

  clearToken(): void {
    localStorage.removeItem('token');
  }
}
