import { Observable, switchMap, tap } from 'rxjs';
import { LoginCredentials } from './../modals/login.modal';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AppLoginService {
  constructor(private http: HttpClient) {}

  login(credentials: LoginCredentials): Observable<{ token: string }> {
    const url = 'http://localhost:3333/api/auth/login';

    return this.http
      .post<{ token: string }>(url, credentials, {
        headers: new HttpHeaders({
          NoAuthorization: 'NoAuthorization',
        }),
      })
      .pipe(
        tap((response) => {
          localStorage.setItem('token', response.token);
        })
      );
  }
}
