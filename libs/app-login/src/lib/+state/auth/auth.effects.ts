import { AppLoginService } from './../../app-login/services/app-login.service';
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as AuthActions from './auth.actions';
import { catchError, map, of } from 'rxjs';

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
          return this.loginService.login(credentials).pipe(
            map((response) =>
              AuthActions.loginSuccess({ token: response.token })
            )
            // catchError((err) =>  of(new Error(err)))
          );
        },
        onError: (action, error) => {
          console.error('Error', error);
          return AuthActions.loginFailure({ error });
        },
      })
    )
  );

  // loginFailure$ = createEffect(() =>
  //   this.actions$.pipe(ofType(AuthActions.loginFailure))
  // );

  constructor(
    private readonly actions$: Actions,
    private readonly loginService: AppLoginService
  ) {}
}
