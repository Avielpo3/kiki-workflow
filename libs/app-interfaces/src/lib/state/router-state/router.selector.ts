import * as fromRouter from '@ngrx/router-store';
import { createSelector } from '@ngrx/store';
import { StoreRootState } from './reducer';

export const getRouterState = (state: StoreRootState) => state.router;

export const getCurrentRouteState = createSelector(
  getRouterState,
  (state: fromRouter.RouterReducerState) => state.state.root
);