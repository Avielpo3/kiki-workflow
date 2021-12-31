import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch, navigation } from '@nrwl/angular';

import * as AuthActions from './auth.actions';
import { catchError, map, of, tap } from 'rxjs';
import { AppAuthService } from '../../app-login/services/app-auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.init),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return AuthActions.loadAuthSuccess({ auth: [] });
        },
        onError: (action, error) => {
          console.error('Error', error);
          return AuthActions.loadAuthFailure({ error });
        },
      })
    )
  );

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      fetch({
        run: (credentials) => {
          return this.authService
            .postLogin(credentials)
            .pipe(
              map((response) =>
                AuthActions.loginSuccess({ token: response.access_token })
              )
            );
        },
        onError: (action, error) => {
          this.authService.clearToken();
          return AuthActions.loginFailure(error);
        },
      })
    )
  );

  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.loginSuccess),
        tap(() => this.router.navigate(['/home']))
      ),
    { dispatch: false }
  );

  constructor(
    private readonly actions$: Actions,
    private readonly authService: AppAuthService,
    private readonly router: Router
  ) {}
}
