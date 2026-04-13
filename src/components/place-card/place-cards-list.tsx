import {TOffer} from '../../types';
import PlaceCard from './place-card';

type TPlaceCardsListProps = {
  type: 'root' | 'offer' | 'favorites';
  offers: TOffer[];
  handleHover: (offer?:TOffer) => void;
}

const PlaceCardsList = ({type, offers, handleHover}: TPlaceCardsListProps):JSX.Element => {
  let className;
  switch (true) {
    case type === 'root': className = 'cities__places-list tabs__content places__list';
      break;
    case type === 'offer': className = 'near-places__list places__list';
      break;
    case type === 'favorites': className = 'favorites__places';
      break;
  }
  return (
    <div className={`${className}`}>
      {offers.map((offer: TOffer) => (
        <PlaceCard
          typeClassName = {type}
          offer = {offer}
          handleHover = {handleHover}
          key = {offer.id}
        />
      ))}
    </div>
  );
};

export default PlaceCardsList;
