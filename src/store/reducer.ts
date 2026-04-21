import {createReducer} from '@reduxjs/toolkit';
import {changeCurrentCity, changeOffers, loadOffers, requireAuthorization} from './action';
import {MY_CITIES, AuthorizationStatus} from '../const';
// import {offers} from '../mocks/offers';

const initialState = {
  currentCity: MY_CITIES[0],
  offers: [],
  authorizationStatus: AuthorizationStatus.Unknown
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
    });
});

export {reducer};
