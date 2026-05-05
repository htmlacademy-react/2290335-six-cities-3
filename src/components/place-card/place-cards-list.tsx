import {TOffer} from '../../types';
import PlaceCard from './place-card';

type TPlaceCardsListProps = {
  type: 'root' | 'offer' | 'favorites';
  offers: TOffer[];
  handleHover: (offer?:TOffer) => void;
}

const ListClassName = {
  root: 'cities__places-list tabs__content places__list',
  offer: 'near-places__list places__list',
  favorites: 'favorites__places',
} as const;

const PlaceCardsList = ({type, offers, handleHover}: TPlaceCardsListProps):JSX.Element => (
  <div className={ListClassName[type] || ''}>
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
