import {createReducer} from '@reduxjs/toolkit';
import {changeCurrentCity} from './action';
import {offers} from '../mocks/offers';


const initialState = {
  currentCity: 'Amsterdam',
  citiesList: offers,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCurrentCity, (state) => {
      state.currentCity = 'Paris';
    });
});

export {reducer};
