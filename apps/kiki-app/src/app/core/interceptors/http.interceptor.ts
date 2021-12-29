import { AuthFacade } from './../../../../../../libs/app-login/src/lib/+state/auth/auth.facade';
import { Store } from '@ngrx/store';
import { HttpServerError } from './../../../../../../libs/app-interfaces/src/lib/errors/http-server';
import { HttpStatusCode } from '@angular/common/http';
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
  constructor(private authFacade:AuthFacade) {
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
        const customErr = this.getErrorMessage(error);
        switch (customErr.httpStatusCode) {
          case HttpStatusCode.Unauthorized:
            if(!customErr.url?.endsWith('/login')){
              this.authFacade.UserUnauthorized401(customErr);
            }
            break;
          case HttpStatusCode.Forbidden:
            this.authFacade.UserForbidden403(customErr);
            break;
          default:

            break;
        }
        //this.errorDialogService.openDialog(data);
        return throwError(() => customErr);
      })
    );
  }

  private getErrorMessage(error: HttpErrorResponse): HttpServerError {
    return new HttpServerError(
      error.status as HttpStatusCode,
      error.message,
      error.url
    );
  }
}
