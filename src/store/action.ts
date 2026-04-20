import {createAction} from '@reduxjs/toolkit';
import {City, TOffer} from '../types';

export const changeCurrentCity = createAction<City>('city/changeCurrentCity');
export const changeOffers = createAction<TOffer[]>('city/changeOffers');
