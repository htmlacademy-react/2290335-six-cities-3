import {createReducer} from '@reduxjs/toolkit';
import {changeCurrentCity} from './action';
import {offers} from '../mocks/offers';


const initialState = {
  currentCity: offers[0],
  citiesList: offers,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCurrentCity, (state, action) => {
      state.currentCity = action.payload;
    });
});

export {reducer};
