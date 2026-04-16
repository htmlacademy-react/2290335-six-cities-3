import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import App from './components/app/app';
import {offers} from './mocks/offers.ts';
import {extendedOffers} from './mocks/extended-offers.ts';
import {otherOffers} from './mocks/other-offers.ts';
import {comments} from './mocks/comments.ts';
import {store} from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App
        offers = {offers}
        extendedOffers = {extendedOffers}
        otherOffers = {otherOffers}
        comments = {comments}
      />
    </Provider>
  </React.StrictMode>
);
