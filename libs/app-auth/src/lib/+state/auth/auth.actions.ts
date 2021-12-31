import { HttpServerError } from '@kiki/interfaces';
import { createAction, props } from '@ngrx/store';
import { LoginCredentials } from '../../app-login/modals/login.modal';
import { AuthEntity } from './auth.models';

export const init = createAction('[Auth Page] Init');

export const loadAuthSuccess = createAction(
  '[Auth/API] Load Auth Success',
  props<{ auth: AuthEntity[] }>()
);

export const loadAuthFailure = createAction(
  '[Auth/API] Load Auth Failure',
  props<{ error: any }>()
);

export const login = createAction(
  '[Auth/API] User Login',
  props<LoginCredentials>()
);

export const loginSuccess = createAction(
  '[Auth/API] User LoggedIn Success',
  props<{ token: string }>()
);

export const loginFailure = createAction(
  '[Auth/API] User Login Failured',
  props<HttpServerError>()
);

export const Unauthorized401 = createAction(
  '[Auth/API] User is Unauthorized 401',
  props<HttpServerError>()
);

export const Unauthorized403 = createAction(
  '[Auth/API] End point is Forbbiden 403',
  props<HttpServerError>()
);
