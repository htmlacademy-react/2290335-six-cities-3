import {createReducer} from '@reduxjs/toolkit';
import {changeCurrentCity, changeOffers, loadOffers, requireAuthorization, setOffersLoadingStatus, changeCurrentOffer, saveAuthInfo, loadFavorite} from './action';
import {City, TOffer} from '../types';
import {MY_CITIES, AuthorizationStatus} from '../const';
import { toggleFavoriteAction } from './api-actions';

const getSavedAuthInfo = (): string | null => {
  const data = localStorage.getItem('user-auth-data');
  return data ? (JSON.parse(data) as string) : null;
};

type TInitialState = {
  currentCity: City;
  offers: TOffer[];
  authorizationStatus: AuthorizationStatus;
  isOffersDataLoading: boolean;
  currentOffer: string | null;
  favorites: TOffer[];
  authInfo: string | null;
}

const initialState: TInitialState = {
  currentCity: MY_CITIES[0],
  offers: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersDataLoading: false,
  currentOffer: null,
  favorites: [],
  authInfo: getSavedAuthInfo(),
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCurrentCity, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(changeOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setOffersLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(changeCurrentOffer, (state, action) => {
      state.currentOffer = action.payload;
    })
    .addCase(saveAuthInfo, (state, action) => {
      state.authInfo = action.payload;
    })
    .addCase(loadFavorite, (state, action) => {
      state.favorites = action.payload;
    })
    .addCase(toggleFavoriteAction.fulfilled, (state, action) => {
      const updatedOffer = action.payload;

      const offerIndex = state.offers.findIndex((item) => item.id === updatedOffer.id);
      if (offerIndex !== -1) {
        state.offers[offerIndex] = updatedOffer;
      }

      if (updatedOffer.isFavorite) {
        state.favorites.push(updatedOffer);
      } else {
        state.favorites = state.favorites.filter((item) => item.id !== updatedOffer.id);
      }
    });
});

export {reducer};
