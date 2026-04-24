import {createReducer} from '@reduxjs/toolkit';
import {changeCurrentCity, changeOffers, loadOffers, requireAuthorization, setError, setQuestionsDataLoadingStatus} from './action';
import {City, TOffer} from '../types';
import {MY_CITIES, AuthorizationStatus} from '../const';

type TInitialState = {
  currentCity: City;
  offers: TOffer[];
  authorizationStatus: 'AUTH' | 'NO_AUTH' | 'UNKNOWN';
  isQuestionsDataLoading: boolean;
  error: string | null;
}

const initialState: TInitialState = {
  currentCity: MY_CITIES[0],
  offers: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isQuestionsDataLoading: false,
  error: null
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
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setQuestionsDataLoadingStatus, (state, action) => {
      state.isQuestionsDataLoading = action.payload;
    });
});

export {reducer};
