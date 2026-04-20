import {TOffer} from '../types';
import {MY_CITIES} from '../const';

const offers: TOffer[] = [
  {
    id: 1,
    title: 'Beautiful &amp; luxurious apartment at great location',
    type: 'Apartment',
    price: 120,
    city: MY_CITIES[3],
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    isPremium: true,
    isFavorite: false,
    rating: 4.3,
    previewImage: 'img/apartment-01.jpg',
  },
  {
    id: 2,
    title: 'Wood and stone place',
    type: 'Room',
    price: 80,
    city: MY_CITIES[3],
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.2,
    previewImage: 'img/room.jpg',
  },
  {
    id: 3,
    title: 'Canal View Prinsengracht',
    type: 'Apartment',
    price: 132,
    city: MY_CITIES[0],
    location: {
      latitude: 48.856614,
      longitude: 2.352222,
      zoom: 8
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.9,
    previewImage: 'img/apartment-02.jpg',
  },
  {
    id: 4,
    title: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    price: 180,
    city: MY_CITIES[0],
    location: {
      latitude: 48.826614,
      longitude: 2.352222,
      zoom: 8
    },
    isFavorite: false,
    isPremium: false,
    rating: 3.8,
    previewImage: 'img/apartment-01.jpg',
  },
  {
    id: 5,
    title: 'good-good well-well',
    type: 'Apartment',
    price: 1000,
    city: MY_CITIES[1],
    location: {
      latitude: 58.9575,
      longitude: 7.8501,
      zoom: 8
    },
    isFavorite: false,
    isPremium: false,
    rating: 3.8,
    previewImage: 'img/apartment-03.jpg',
  },
  {
    id: 6,
    title: 'The most good!',
    type: 'Apartment',
    price: 500,
    city: MY_CITIES[1],
    location: {
      latitude: 50.9575,
      longitude: 7.9501,
      zoom: 8
    },
    isFavorite: false,
    isPremium: false,
    rating: 3.8,
    previewImage: 'img/apartment-02.jpg',
  },
  {
    id: 7,
    title: 'Student dormentory',
    type: 'Room',
    price: 10,
    city: MY_CITIES[1],
    location: {
      latitude: 54.9575,
      longitude: 7.9501,
      zoom: 8
    },
    isFavorite: true,
    isPremium: true,
    rating: 3,
    previewImage: 'img/room.jpg',
  },
  {
    id: 8,
    title: 'Dormentory',
    type: 'Room',
    price: 20,
    city: MY_CITIES[1],
    location: {
      latitude: 55.9575,
      longitude: 6.9501,
      zoom: 8
    },
    isFavorite: true,
    isPremium: true,
    rating: 2,
    previewImage: 'img/room.jpg',
  },
  {
    id: 9,
    title: 'Station Hostel',
    type: 'Room',
    price: 15,
    city: MY_CITIES[1],
    location: {
      latitude: 52.9575,
      longitude: 6.9501,
      zoom: 8
    },
    isFavorite: true,
    isPremium: true,
    rating: 1,
    previewImage: 'img/room.jpg',
  },
  {
    id: 10,
    title: 'Anny aunt`s room',
    type: 'Room',
    price: 1,
    city: MY_CITIES[1],
    location: {
      latitude: 50.9575,
      longitude: 6.9501,
      zoom: 8
    },
    isFavorite: true,
    isPremium: true,
    rating: 4,
    previewImage: 'img/room.jpg',
  },
  {
    id: 11,
    title: 'Most Typically apartment',
    type: 'Apartment',
    price: 150,
    city: MY_CITIES[1],
    location: {
      latitude: 50.9275,
      longitude: 6.9601,
      zoom: 8
    },
    isFavorite: false,
    isPremium: false,
    rating: 2,
    previewImage: 'img/apartment-02.jpg',
  },
  {
    id: 12,
    title: 'Grand Hotel Budapest',
    type: 'Apartment',
    price: 5000,
    city: MY_CITIES[1],
    location: {
      latitude: 50.9375,
      longitude: 6.9603,
      zoom: 8
    },
    isFavorite: false,
    isPremium: false,
    rating: 5,
    previewImage: 'img/apartment-02.jpg',
  },
];

export {offers};
