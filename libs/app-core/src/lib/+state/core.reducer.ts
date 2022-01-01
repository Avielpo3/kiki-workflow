import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';
import { ActionReducerMap } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import { routerReducer } from '@ngrx/router-store';
import * as CoreActions from './core.actions';
import { CoreEntity } from './core.models';



export const CORE_FEATURE_KEY = 'core';

export interface CoreState extends EntityState<CoreEntity> {
  selectedId?: string | number; // which Core record has been selected
  loaded: boolean; // has the Core list been loaded
  error?: string | null; // last known error (if any)
  isUserAuthenticated: boolean;
}

export interface CorePartialState {
  readonly [CORE_FEATURE_KEY]: CoreState;
}

export const coreAdapter: EntityAdapter<CoreEntity> =
  createEntityAdapter<CoreEntity>();

export const initialState: CoreState = coreAdapter.getInitialState({
  // set initial required properties
  loaded: false,
  isUserAuthenticated: false,
});

const coreReducer = createReducer(
  initialState,
  on(CoreActions.init, (state) => ({ ...state, loaded: false, error: null })),
  on(CoreActions.loadCoreSuccess, (state, { core }) =>
    coreAdapter.setAll(core, { ...state, loaded: true })
  ),
  on(CoreActions.loadCoreFailure, (state, { error }) => ({ ...state, error })),
  on(CoreActions.loginSuccess, (state) => ({
    ...state,
    isUserAuthenticated: true,
    error: null,
  })),
  on(CoreActions.loginFailure, (state, { message }) => ({
    ...state,
    isUserAuthenticated: false,
    error: message,
  }))
);

export function reducer(state: CoreState | undefined, action: Action) {
  return coreReducer(state, action);
}

export interface StoreRootState {
  router: fromRouter.RouterReducerState<any>;
}

export const reducers: ActionReducerMap<StoreRootState> = {
  router: routerReducer,
};
