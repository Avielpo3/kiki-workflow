import { HttpServerError } from './../../../../../app-interfaces/src/lib/errors/http-server';
import { UnauthorizedException } from '@nestjs/common';
import { Injectable } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';

import * as AuthActions from './auth.actions';
import * as AuthFeature from './auth.reducer';
import * as AuthSelectors from './auth.selectors';

@Injectable()
export class AuthFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(AuthSelectors.getAuthLoaded));
  allAuth$ = this.store.pipe(select(AuthSelectors.getAllAuth));
  selectedAuth$ = this.store.pipe(select(AuthSelectors.getSelected));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(AuthActions.init());
  }

  UserUnauthorized401(error: HttpServerError): void {
    this.store.dispatch(AuthActions.Unauthorized401(error));
  }

  UserForbidden403(error: HttpServerError) {
    this.store.dispatch(AuthActions.Forbbiden403(error));
  }
}
