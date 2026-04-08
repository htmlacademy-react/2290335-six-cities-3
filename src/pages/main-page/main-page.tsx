import {useState} from 'react';
import {TOfferProps, TOffer, City} from '../../types';
import {CITIES_MOCK} from '../../const';
import CitiesList from './components/cities-list';
import PlaceCardsList from '../../components/place-card/place-cards-list';
import Map from '../../components/map/map';

function MainPage ({offers}: TOfferProps): JSX.Element {
  const [activeOffer, setActiveOffer] = useState<TOffer>();
  const handleHover = (offer?: TOffer) => {
    setActiveOffer(offer);
  };
  // Мокковый Амстердам
  const cityMockAmsterdam: City = CITIES_MOCK[3];

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <CitiesList/>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{offers.length} places to stay in Amsterdam</b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex={0}>
                Popular
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select"></use>
                </svg>
              </span>
              <ul className="places__options places__options--custom ">
                <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                <li className="places__option" tabIndex={0}>Price: low to high</li>
                <li className="places__option" tabIndex={0}>Price: high to low</li>
                <li className="places__option" tabIndex={0}>Top rated first</li>
              </ul>
            </form>
            <PlaceCardsList offers={offers} handleHover={handleHover}/>
          </section>
          <div className="cities__right-section">
            <Map offers={offers} city={cityMockAmsterdam} selectedPoint={activeOffer }/>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainPage;
