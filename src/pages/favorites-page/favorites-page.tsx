import FavoriteCard from './components/favorite-card';

const favoriteCities = ['Amsterdam'];
type cardType = {
  id: number;
  name: string;
  url: string;
  price: number;
  isPremium: boolean;
  isFavorite: boolean;
  type: string;
  rating: number;
}

interface ArrayCardsType {
  offers: cardType[];
}


function Favorites({offers}: ArrayCardsType): JSX.Element {
  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {favoriteCities.map((favoriteCity) => (
              <li className="favorites__locations-items" key={favoriteCity}>
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>{favoriteCity}</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  {offers.map((offer) => (
                    <FavoriteCard {...offer} key={offer.id}/>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}

export default Favorites;
