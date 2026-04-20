import {MY_CITIES} from '../../../const';
import {useAppDispatch} from '../../../hooks';
import {changeCurrentCity} from '../../../store/action';
import {City} from '../../../types';

type TCitiesList = {
  currentCity: City;
}

const CitiesList = ({currentCity}: TCitiesList): JSX.Element => {
  const dispatch = useAppDispatch();
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {MY_CITIES.map((city) => (
          <li className="locations__item"
            key={city.name}
            onClick={() => dispatch(changeCurrentCity(city))}
          >
            <a className={`locations__item-link tabs__item ${currentCity.name === city.name ? 'tabs__item--active' : ''}`}
              href="#"
            >
              <span>{city.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};
// classNames('clocations__item-link', 'tabs__item', {'tabs__item--active': currentCity})
export default CitiesList;

