import {TOffer} from '../../types';
import PlaceCard from './place-card';

type TPlaceCardsListProps = {
  type: 'root' | 'offer' | 'favorites';
  offers: TOffer[];
  onHandleHover?: (offer?:TOffer) => void;
}

const ListClassName = {
  root: 'cities__places-list tabs__content places__list',
  offer: 'near-places__list places__list',
  favorites: 'favorites__places',
} as const;

const PlaceCardsList = ({type, offers, onHandleHover}: TPlaceCardsListProps):JSX.Element => (
  <div className={ListClassName[type] || ''}>
    {offers.map((offer: TOffer) => (
      <PlaceCard
        typeClassName = {type}
        offer = {offer}
        key = {offer.id}
        onHandleHover = {onHandleHover}
      />
    ))}
  </div>
);


export default PlaceCardsList;
