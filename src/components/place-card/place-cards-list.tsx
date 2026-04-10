import {useLocation} from 'react-router-dom';
import {AppRoute} from '../../const';
import {TOffer, TOfferComplexSecond, TOfferExtended} from '../../types';
import PlaceCard from './place-card';

const getClassNameByPath = (pathname: AppRoute) => {
  let className = '';
  if (pathname === AppRoute.Root) {
    className = 'cities__places-list tabs__content';
  } else {
    className = 'near-places__list';
  }
  return {className};
};

const PlaceCardsList = ({offers, handleHover}: TOfferComplexSecond):JSX.Element => {
  const {pathname} = useLocation();
  const {className} = getClassNameByPath(pathname as AppRoute);
  return (
    <div className={`${className} places__list`}>
      {offers.map((offer: TOffer | TOfferExtended) => (
        <PlaceCard offer={offer} handleHover={handleHover} key={offer.id}/>
      ))}
    </div>
  );
};

export default PlaceCardsList;
