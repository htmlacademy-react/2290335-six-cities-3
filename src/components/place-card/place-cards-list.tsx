import {TOffer} from '../../types';
import PlaceCard from './place-card';

type TPlaceCardsListProps = {
  type: 'root' | 'offer';
  offers: TOffer[];
  handleHover: (offer?:TOffer) => void;
}

const PlaceCardsList = ({type, offers, handleHover}: TPlaceCardsListProps):JSX.Element => {
  const className = type === 'root' ? 'cities__places-list tabs__content' : 'near-places__list';
  return (
    <div className={`${className} places__list`}>
      {offers.map((offer: TOffer) => (
        <PlaceCard
          offer={offer}
          handleHover={handleHover}
          key={offer.id}
        />
      ))}
    </div>
  );
};

export default PlaceCardsList;
