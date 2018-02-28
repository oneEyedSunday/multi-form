import { AppState } from './../reducers';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export const getAppState = createFeatureSelector<AppState>('form');
// dont need this anymore
// export const getFormInProgress = createSelector(getAppState, (state: AppState) => state.formInProgress);
export const getCurrentForm = createSelector(getAppState, (state: AppState) => state.currentForm);
