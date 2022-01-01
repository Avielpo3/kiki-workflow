import { Injectable } from '@angular/core';
import { HttpServerError, LoginCredentials } from '@kiki/interfaces';
import { select, Store, Action } from '@ngrx/store';

import * as CoreActions from './core.actions';
import * as RouterSelectors from './router.selector';
import * as CoreSelectors from './core.selectors';

@Injectable()
export class CoreFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(CoreSelectors.getCoreLoaded));
  allCore$ = this.store.pipe(select(CoreSelectors.getAllCore));
  selectedCore$ = this.store.pipe(select(CoreSelectors.getSelected));
  authError$ = this.store.pipe(select(CoreSelectors.getCoreError));
  isUserAuth$ = this.store.pipe(select(CoreSelectors.getIsUserAuthenticated));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(CoreActions.init());
  }

  /**
   * Login to server with username and password.
   * @param credentials submit login to server
   */
  login(credentials: LoginCredentials) {
    this.store.dispatch(CoreActions.login(credentials));
  }

  UserUnauthorized401(error: HttpServerError): void {
    this.store.dispatch(CoreActions.Unauthorized401(error));
  }

  UserForbidden403(error: HttpServerError) {
    // this.store.dispatch(AuthActions.Forbbiden403(error));
  }
}
