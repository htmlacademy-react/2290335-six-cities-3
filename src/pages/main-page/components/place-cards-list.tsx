import {TOffer, TOfferProps} from '../../../types';
import {Nullable} from 'vitest';
import {useState} from 'react';
import PlaceCard from './place-card';

function PlaceCardsList({offers}: TOfferProps) {
  const [, setActiveOffer] = useState<Nullable<TOffer>>(null);
  const handleHover = (offer?: TOffer) => {
    setActiveOffer(offer || null);
  };
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer: TOffer) => (
        <PlaceCard offer={offer} key={offer.id} handleHover={handleHover}/>
      ))}
    </div>
  );
}

export default PlaceCardsList;
