import CitiesList from './components/cities-list';
import {TOfferProps, TOffer} from '../../types';
import PlaceCardsList from './components/place-cards-list';
import {Nullable} from 'vitest';
import {useState} from 'react';
import Map from './components/map';

function MainPage ({offers}: TOfferProps): JSX.Element {
  const [activeOffer, setActiveOffer] = useState<Nullable<TOffer>>(null);
  const handleHover = (offer?: TOffer) => {
    setActiveOffer(offer);
  };
  const city = {
    title: offers[0].city.name,
    lat: offers[0].city.location.latitude,
    lng: offers[0].city.location.longitude,
    zoom: 20
  };

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
            <Map offers={offers} city={city} selectedPoint={activeOffer }/>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainPage;
