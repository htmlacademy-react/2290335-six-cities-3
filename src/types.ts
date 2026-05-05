import {store} from './store/index';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserData = {
  id: number;
  email: string;
  token: string;
};

export type AuthData = {
  login: string;
  password: string;
};

export type TOffer = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: {
    name: string;
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
    };
  };
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage?: string;
}

export type TOfferExtended = TOffer & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
  images: [string];
  maxAdults: number;
}

export type TAnyOffer = TOffer | TOfferExtended;

export type TComment = {
  id: string;
  date: string;
  user: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
  comment: string;
  rating: number;
};

export type TCity = {
  name: string;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
};

export type MapProps = {
  city: TCity;
  offers: TOffer[] | TOfferExtended[] | TAnyOffer[] | null;
  ClassNamesForMap: string;
  selectedPoint?: TOffer | TOfferExtended;
  selectedOffer?: TOffer | TOfferExtended;
};

