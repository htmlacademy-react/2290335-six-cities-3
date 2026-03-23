type OfferType = {
  id: number;
  name: string;
  url: string;
  price: number;
  isPremium: boolean;
  isFavorite: boolean;
  type: string;
  rating: number;
}

type AppScreenProps = {
  numberOfPlaces: number;
  offers: OfferType[];
}

// {
//   id: number;
//   name: string;
//   url: string;
//   price: number;
//   isPremium: boolean;
//   isFavorite: boolean;
//   type: string;
//   rating: number;
// };

export type {OfferType, AppScreenProps};
