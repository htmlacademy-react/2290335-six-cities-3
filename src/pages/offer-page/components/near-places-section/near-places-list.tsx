import {TOffer} from '../../../../types';
import NearPlacesCard from './near-places-card';

type TOfferPropComplex = {
  selectedOffer: TOffer;
  offers: TOffer[];
}

const NearPlacesList = ({selectedOffer, offers}: TOfferPropComplex):JSX.Element => {
  const restOffers = offers.filter((item) => item.id !== selectedOffer.id);
  return (
    <div className="near-places__list places__list">
      {restOffers.map((offer) => (
        <NearPlacesCard offer = {offer} key={offer.id}/>
      ))}
    </div>
  );
};

export default NearPlacesList;
