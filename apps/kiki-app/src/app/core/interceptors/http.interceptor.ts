import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable()
export class KikiHttpInterceptor implements HttpInterceptor {
  constructor() {
    // Ctor
  }

  private readonly NO_AUTH_HEADER = 'NoAuthorization';
  private readonly AUTHORIZATION_HEADER = 'Authorization';
  private readonly CONTENT_TYPE_HEADER = 'Content-Type';
  private readonly ACCRPT_HEADER = 'Accept';
  private readonly APPLICATION_JSON = 'application/json';
  private readonly Bearer = 'Bearer ';
  private readonly TOKEN = 'token';

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token: string | null = localStorage.getItem(this.TOKEN);
    request = request.clone({
      headers: request.headers.set(this.ACCRPT_HEADER, this.APPLICATION_JSON),
    });

    if (!request.headers.has(this.CONTENT_TYPE_HEADER)) {
      request = request.clone({
        headers: request.headers.set(
          this.CONTENT_TYPE_HEADER,
          this.APPLICATION_JSON
        ),
      });
    }

    if (!request.headers.has(this.NO_AUTH_HEADER) && token) {
      request = request.clone({
        headers: request.headers.set(
          this.AUTHORIZATION_HEADER,
          this.Bearer + token
        ),
      });
    }

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let data = {};
        data = {
          reason:
            error && error.error && error.error.reason
              ? error.error.reason
              : '',
          status: error.status,
        };
        //this.errorDialogService.openDialog(data);
        return throwError(() => new Error('aa'));
      })
    );
  }
}
