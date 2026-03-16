const Settings = {
  NUMBER_OF_PLACES : 312,
};

const cities = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

const cards = [
  {
    id: 1,
    name: 'Beautiful &amp; luxurious apartment at great location',
    url: 'img/apartment-01.jpg',
    price: 120,
    isPremium: true,
    isFavorite: false,
    type: 'Apartment',
  },
  {
    id: 2,
    name: 'Wood and stone place',
    url: 'img/room.jpg',
    price: 80,
    isPremium: false,
    isFavorite: true,
    type: 'Room',
  },
  {
    id: 3,
    name: 'Canal View Prinsengracht',
    url: 'img/apartment-02.jpg',
    price: 132,
    isPremium: false,
    isFavorite: false,
    type: 'Apartment',
  },
  {
    id: 4,
    name: 'Nice, cozy, warm big bed apartment',
    url: 'img/apartment-03.jpg',
    price: 180,
    isPremium: false,
    isFavorite: false,
    type: 'Apartment',
  },
];

export {cards, Settings, cities};
