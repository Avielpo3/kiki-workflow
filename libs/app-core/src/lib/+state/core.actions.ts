import { HttpServerError, LoginCredentials } from '@kiki/interfaces';
import { createAction, props } from '@ngrx/store';
import { CoreEntity } from './core.models';

export const init = createAction('[Core Page] Init');

export const loadCoreSuccess = createAction(
  '[Core/API] Load Core Success',
  props<{ core: CoreEntity[] }>()
);

export const loadCoreFailure = createAction(
  '[Core/API] Load Core Failure',
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
