import {TOffer} from '../../types';
import PlaceCard from './place-card';

type TPlaceCardsListProps = {
  type: 'root' | 'offer' | 'favorites';
  offers: TOffer[];
  handleHover: (offer?:TOffer) => void;
}

const getClassName = (type: 'root' | 'offer' | 'favorites') => {
  switch (true) {
    case type === 'root':
      return 'cities__places-list tabs__content places__list';
    case type === 'offer':
      return 'near-places__list places__list';
    case type === 'favorites':
      return 'favorites__places';
    default:
      return '';
  }
};

const PlaceCardsList = ({type, offers, handleHover}: TPlaceCardsListProps):JSX.Element => (
  <div className={`${getClassName(type)}`}>
    {offers.map((offer: TOffer) => (
      <PlaceCard
        typeClassName = {type}
        offer = {offer}
        key = {offer.id}
        handleHover = {handleHover}
      />
    ))}
  </div>
);


export default PlaceCardsList;
