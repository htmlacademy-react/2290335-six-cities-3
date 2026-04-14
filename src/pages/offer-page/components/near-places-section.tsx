import {TOffer} from '../../../types';
import PlaceCardsList from '../../../components/place-card/place-cards-list';

type TComplexProps = {
  otherOffers: TOffer[];
}

const NearPlacesSection = ({otherOffers}: TComplexProps):JSX.Element => (
  <div className="container">
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <PlaceCardsList
        type = {'offer'}
        offers = {otherOffers}
      />
    </section>
  </div>
);


export default NearPlacesSection;
