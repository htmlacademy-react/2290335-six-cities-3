import {TOffer, TOfferComplexSecond} from '../../../types';
import PlaceCard from './place-card';

function PlaceCardsList({offers, handleHover}: TOfferComplexSecond) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer: TOffer) => (
        <PlaceCard offer={offer} handleHover={handleHover} key={offer.id}/>
      ))}
    </div>
  );
}

export default PlaceCardsList;
