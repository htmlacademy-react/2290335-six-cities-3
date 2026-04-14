import {useAppSelector} from '../../hooks';
import {useParams} from 'react-router-dom';
import {TOffer, TOfferExtended, TComment} from '../../types';
import {OfferInside} from './components/offer-inside';
import {OfferHost} from './components/offer-host';
import NotFoundedPage from '../not-founded-page/not-founded-page';
import ReviewsSection from './components/reviews-section/reviews-section';
import NearPlacesSection from './components/near-places-section';
import Map from '../../components/map/map';
import {classNamesForMap} from '../../const';

type TComplicatedProps = {
  otherOffers: TOffer[];
  extendedOffers: TOfferExtended[];
  comments: TComment[];
}

function OfferPage({extendedOffers, otherOffers, comments}: TComplicatedProps):JSX.Element {
  const activeOffer = useAppSelector((state) => state.currentCity);

  const params = useParams();
  const selectedOffer = extendedOffers.find((item) => item.id === Number(params.id)) as TOfferExtended;
  const {id, title, type, price, isFavorite, isPremium, rating, description, bedrooms, host, goods, images, maxAdults} = selectedOffer;

  return selectedOffer ? (
    <main className="page__main page__main--offer">
      <section className="offer">
        <div className="offer__gallery-container container">
          <div className="offer__gallery">
            <div className="offer__image-wrapper" key={id}>
              <img className="offer__image"
                src={images[0]}
                alt="Photo studio"
              />
            </div>
          </div>
        </div>
        <div className="offer__container container">
          <div className="offer__wrapper">
            {isPremium && (
              <div className="offer__mark"><span/>Premium</div>
            )}
            <div className="offer__name-wrapper">
              <h1 className="offer__name">{title}</h1>
              {isFavorite && (
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"/>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              )}
            </div>
            <div className="offer__rating rating">
              <div className="offer__stars rating__stars">
                <span style={{width: `${Math.round(rating) * 20}%`}}/>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="offer__rating-value rating__value">{rating}</span>
            </div>
            <ul className="offer__features">
              <li className="offer__feature offer__feature--entire">{type}</li>
              <li className="offer__feature offer__feature--bedrooms">{bedrooms} Bedrooms</li>
              <li className="offer__feature offer__feature--adults"> Max {maxAdults} adults</li>
            </ul>
            <div className="offer__price">
              <b className="offer__price-value">&euro;{price}</b>
              <span className="offer__price-text">&nbsp;night</span>
            </div>
            <OfferInside goods = {goods}/>
            <OfferHost host = {host}
              description = {description}
            />
            <ReviewsSection comments = {comments}/>
          </div>
        </div>
        <Map
          offers = {otherOffers}
          city = {activeOffer}
          selectedPoint = {activeOffer}
          classNamesForMap = {classNamesForMap.Offer}
        />
      </section>
      <NearPlacesSection
        otherOffers = {otherOffers}
      />
    </main>
  ) : (
    <NotFoundedPage/>
  );
}

export default OfferPage;
