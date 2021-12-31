import { HttpServerError } from '@kiki/interfaces';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as AuthActions from './auth.actions';
import * as AuthSelectors from './auth.selectors';
import { LoginCredentials } from '../../app-login/modals/login.modal';

@Injectable()
export class AuthFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(AuthSelectors.getAuthLoaded));
  allAuth$ = this.store.pipe(select(AuthSelectors.getAllAuth));
  selectedAuth$ = this.store.pipe(select(AuthSelectors.getSelected));
  authError$ = this.store.pipe(select(AuthSelectors.getAuthError));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(AuthActions.init());
  }

  /**
   * Login to server with username and password.
   * @param credentials submit login to server
   */
  login(credentials: LoginCredentials) {
    this.store.dispatch(AuthActions.login(credentials));
  }


  UserUnauthorized401(error: HttpServerError): void {
    this.store.dispatch(AuthActions.Unauthorized401(error));
  }

  UserForbidden403(error: HttpServerError) {
    // this.store.dispatch(AuthActions.Forbbiden403(error));
  }
}
