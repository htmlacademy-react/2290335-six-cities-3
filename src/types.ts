export type TOffer = {
  id: number;
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
  previewImage: string;
}

export type TOfferProps = {
  offers: TOffer[];
}

export type TOfferComplex = {
  offer: TOffer;
  handleHover: (offer?:TOffer) => void;
}

export type TOfferComplexSecond = {
  offers: TOffer[];
  handleHover: (offer?:TOffer) => void;
}

export type City = {
  title: string;
  lat: number;
  lng: number;
  zoom: number;
  name: string;
  location: {
      latitude: number;
      longitude: number;
      zoom: number;
    };
};

export type CityFromServer = {
  name: string;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
};

export type TCityLeaflet = {
  title: string;
  lat: number;
  lng: number;
  zoom : number;
}

export type Point = {
  title: string;
  lat: number;
  lng: number;
  zoom : number;
  name?: string;
  location?: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
};

export type Points = Point[];

export type MapProps = {
  city: City;
  offers: TOffer[];
  selectedPoint?: TOffer;
  selectedOffer?: TOffer;
};

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

