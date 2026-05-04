import {useMemo, useState} from 'react';
import PlaceCardsList from '../../components/place-card/place-cards-list';
import {TOffer} from '../../types';
import {useAppSelector} from '../../hooks';

type GroupedOffers = Record<string, TOffer[]>;

const FavoritePage = (): JSX.Element => {
  const favorites = useAppSelector((state) => state.favorites);
  const [, setActiveOffer] = useState<TOffer>();

  const groupedByCity = useMemo(() =>
    favorites.reduce<GroupedOffers>((acc, offer) => {
      const cityName = offer.city.name;

      if (!acc[cityName]) {
        acc[cityName] = [];
      }

      acc[cityName].push(offer);
      return acc;
    }, {}), [favorites]);

  const handleHover = (offer?: TOffer) => {
    setActiveOffer(offer);
  };

  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {Object.entries(groupedByCity).map(([cityName, cityOffers]) => (
              <li className="favorites__locations-items" key={cityName}>
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>{cityName}</span>
                    </a>
                  </div>
                </div>
                <PlaceCardsList
                  offers={cityOffers}
                  type={'favorites'}
                  handleHover = {handleHover}
                />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
};

export default FavoritePage;
