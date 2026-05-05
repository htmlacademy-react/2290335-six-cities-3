import {ClassNamesForMap} from '../../const';
import {TOffer} from '../../types';
import {useState} from 'react';
import {useAppSelector} from '../../hooks';
import {SortOption} from './components/const';
import CitiesList from './components/cities-list';
import PlaceCardsList from '../../components/place-card/place-cards-list';
import Map from '../../components/map/map';
import SortBar from './components/sort-bar';
import classNames from 'classnames';
import EmptySection from './components/empty-section';

function MainPage (): JSX.Element {
  const [activeOffer, setActiveOffer] = useState<TOffer>();
  const handleHover = (offer?: TOffer) => {
    setActiveOffer(offer);
  };

  const currentCity = useAppSelector((state) => state.currentCity);
  const offers: TOffer[] = useAppSelector((state) => state.offers);
  const filteredOffers = offers.filter((offer) => offer.city.name === currentCity.name);
  const isEmpty = offers.length === 0;
  const [activeSort, setActiveSort] = useState(SortOption.Popular);

  let sortedOffers = filteredOffers;

  if (activeSort === SortOption.PriceLowToHigh) {
    sortedOffers = [...filteredOffers].sort((a, b) => a.price - b.price);
  }

  if (activeSort === SortOption.PriceHighToLow) {
    sortedOffers = [...filteredOffers].sort((a, b) => b.price - a.price);
  }

  if (activeSort === SortOption.TopRatedFirst) {
    sortedOffers = [...filteredOffers].sort((a, b) => b.rating - a.rating);
  }

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <CitiesList currentCity = {currentCity}/>
      </div>
      <div className="cities">
        <div className={classNames('container', 'cities__places-container', {'cities__places-container--empty': isEmpty})}>
          {isEmpty && <EmptySection/>}
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{sortedOffers.length} places to stay in {currentCity.name}</b>
            <SortBar
              current={activeSort}
              setter={setActiveSort}
            />
            <PlaceCardsList
              type = {'root'}
              offers={sortedOffers}
              handleHover={handleHover}
            />
          </section>
          <div className="cities__right-section">
            <Map
              city={currentCity}
              offers={filteredOffers}
              selectedPoint={activeOffer}
              ClassNamesForMap={ClassNamesForMap.Root}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainPage;
