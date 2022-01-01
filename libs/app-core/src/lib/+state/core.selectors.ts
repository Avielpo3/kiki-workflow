import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CORE_FEATURE_KEY, CoreState, coreAdapter } from './core.reducer';


// Lookup the 'Core' feature state managed by NgRx
export const getCoreState = createFeatureSelector<CoreState>(CORE_FEATURE_KEY);

const { selectAll, selectEntities } = coreAdapter.getSelectors();

export const getCoreLoaded = createSelector(
  getCoreState,
  (state: CoreState) => state.loaded
);

export const getCoreError = createSelector(
  getCoreState,
  (state: CoreState) => state.error
);

export const getIsUserAuthenticated = createSelector(
  getCoreState,
  (state: CoreState) => state.isUserAuthenticated
);

export const getAllCore = createSelector(getCoreState, (state: CoreState) =>
  selectAll(state)
);

export const getCoreEntities = createSelector(getCoreState, (state: CoreState) =>
  selectEntities(state)
);

export const getSelectedId = createSelector(
  getCoreState,
  (state: CoreState) => state.selectedId
);

export const getSelected = createSelector(
  getCoreEntities,
  getSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
