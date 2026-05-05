import {createAction} from '@reduxjs/toolkit';
import {City, TOffer, TOfferExtended} from '../types';
import {AuthorizationStatus, AppRoute} from '../const';

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const saveAuthInfo = createAction<string | null>('auth/saveAuthInfo');
export const redirectToRoute = createAction<AppRoute>('user/redirectToRoute');
export const loadOffers = createAction<TOffer[]>('data/loadOffers');
export const setOffersLoadingStatus = createAction<boolean>('data/setOffersLoadingStatus');
export const changeCurrentCity = createAction<City>('city/changeCurrentCity');
export const changeOffers = createAction<TOffer[]>('offers/changeOffers');
export const changeCurrentOffer = createAction<TOffer | TOfferExtended>('offer/changeCurrentOffer');
export const loadFavorite = createAction<TOffer[]>('data/favorites');
