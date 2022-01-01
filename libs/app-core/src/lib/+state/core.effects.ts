import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import { map } from 'rxjs/internal/operators/map';
import { tap } from 'rxjs/internal/operators/tap';
import { AppAuthService } from '../services/app-auth.service';

import * as CoreActions from './core.actions';

@Injectable()
export class CoreEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CoreActions.init),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return CoreActions.loadCoreSuccess({ core: [] });
        },
        onError: (action, error) => {
          console.error('Error', error);
          return CoreActions.loadCoreFailure({ error });
        },
      })
    )
  );

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CoreActions.login),
      fetch({
        run: (credentials) => {
          return this.authService
            .postLogin(credentials)
            .pipe(
              map((response) =>
                CoreActions.loginSuccess({ token: response.access_token })
              )
            );
        },
        onError: (action, error) => {
          this.authService.clearToken();
          return CoreActions.loginFailure(error);
        },
      })
    )
  );

  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CoreActions.loginSuccess),
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
