import {createReducer} from '@reduxjs/toolkit';
import {changeCurrentCity, changeOffers} from './action';
import {offers} from '../mocks/offers';
import {MY_CITIES} from '../const';

const initialState = {
  currentCity: MY_CITIES[0],
  offers: offers,
};


const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCurrentCity, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(changeOffers, (state, action) => {
      state.offers = action.payload;
    });
});

export {reducer};
