import {CITIES_MOCK} from '../../../const';

const CitiesList = () => (
  <section className="locations container">
    <ul className="locations__list tabs__list">
      {CITIES_MOCK.map((city) => (
        <li className="locations__item" key={city.name}>
          <a className="locations__item-link tabs__item" href="#">
            <span>{city.name}</span>
          </a>
        </li>
      ))}
    </ul>
  </section>
);

export default CitiesList;

