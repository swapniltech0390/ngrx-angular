import { createFeatureSelector, createSelector } from '@ngrx/store';
import {ProductState } from './products.reducer';
import { AuthState } from 'src/app/auth/store';

export const selectAuthState = createFeatureSelector<AuthState>('auth');
export const selectProductState = createFeatureSelector<ProductState>('product');

export const isLoggedIn = createSelector(selectAuthState, (state) => state.isAuth);
export const isLoggedError = createSelector(selectAuthState, (state) => state.error);

export const product = createSelector(selectProductState, (state) => state.product);
export const isLoggedOut = createSelector(isLoggedIn, (loggedIn) => !loggedIn);
