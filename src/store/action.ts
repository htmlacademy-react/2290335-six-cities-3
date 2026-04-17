import {createAction} from '@reduxjs/toolkit';
import {City} from '../types';

export const changeCurrentCity = createAction<City>('city/changeCurrentCity');
export const changeOffers = createAction('city/changeOffers');
