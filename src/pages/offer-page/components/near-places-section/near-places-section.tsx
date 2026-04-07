import {TOffer} from '../../../../types';
import NearPlacesList from './near-places-list';

type TOfferPropComplex = {
  selectedOffer: TOffer;
  offers: TOffer[];
}

const NearPlacesSection = ({selectedOffer, offers}: TOfferPropComplex):JSX.Element => (
  <div className="container">
    <section className="near-places places">
      <h2 className="near-places__title"/>Other places in the neighbourhood
      <NearPlacesList selectedOffer = {selectedOffer} offers = {offers}/>
    </section>
  </div>
);

export default NearPlacesSection;
