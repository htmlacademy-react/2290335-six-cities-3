import {TOfferComplexSecond} from '../../../types';
import PlaceCardsList from '../../../components/place-card/place-cards-list';

const NearPlacesSection = ({handleHover, offers}: TOfferComplexSecond):JSX.Element => (
  <div className="container">
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <PlaceCardsList handleHover = {handleHover} offers = {offers}/>
    </section>
  </div>
);


export default NearPlacesSection;
