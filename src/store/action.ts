import {createAction} from '@reduxjs/toolkit';
import {City, TOffer} from '../types';
import {AuthorizationStatus, AppRoute} from '../const';

export const changeCurrentCity = createAction<City>('city/changeCurrentCity');
export const changeOffers = createAction<TOffer[]>('city/changeOffers');
export const loadOffers = createAction<TOffer[]>('city/loadOffers');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const setError = createAction<string | null>('game/setError');
export const setOffersLoadingStatus = createAction<boolean>('data/setOffersLoadingStatus');
export const redirectToRoute = createAction<AppRoute>('game/redirectToRoute');
export const changeCurrentOffer = createAction<number>('city/changeCurrentOffer');
