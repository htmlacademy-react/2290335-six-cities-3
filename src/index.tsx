import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {Settings} from './const.ts';
import {offers} from './mocks/offers.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App numberOfPlaces = {Settings.NUMBER_OF_PLACES}
      offers = {offers}
    />
  </React.StrictMode>
);
