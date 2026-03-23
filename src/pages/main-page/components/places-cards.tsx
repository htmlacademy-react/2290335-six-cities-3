import PlaceCard from './place-card';

type cardType = {
  id: number;
  name: string;
  url: string;
  price: number;
  isPremium: boolean;
  isFavorite: boolean;
  type: string;
  rating: number;
}

interface ArrayCardsType {
  offers: cardType[]; // Указываем, что ждем массив объектов Offer
}

function PlacesCards({offers}: ArrayCardsType): JSX.Element {
  return (
    <>
      {offers.map((offer: cardType) => (
        <PlaceCard {...offer} key={offer.id}/>
      ))}
    </>
  );
}

export default PlacesCards;
