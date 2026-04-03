import {TOffer, TOfferProps} from '../../../types';
import {Nullable} from 'vitest';
import {useState} from 'react';
import PlaceCard from './place-card';

function PlaceCardsList({offers}: TOfferProps) {
  const [activeOffer, setActiveOffer] = useState<Nullable<TOffer>>(null);
  const handleHover = (offer?: TOffer) => {
    setActiveOffer(offer);
  };
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer: TOffer) => (
        <PlaceCard offer={offer} handleHover={handleHover} key={offer.id}/>
      ))}
    </div>
  );
}

export default PlaceCardsList;
