import {useParams} from 'react-router-dom';
import {TOffer, TOfferProps} from '../../types';
import {OfferInside} from './components/offer-inside';
import {OfferHost} from './components/offer-host';
import NotFoundedPage from '../not-founded-page/not-founded-page';
import ReviewsSection from './components/reviews-section';
import NearPlacesSection from './components/near-places-section';

function OfferPage({offers}: TOfferProps):JSX.Element {
  const params = useParams();
  const selectedOffer = offers.find((item) => item.id === Number(params.id)) as TOffer;
  return selectedOffer ? (
    <main className="page__main page__main--offer">
      <section className="offer">
        <div className="offer__gallery-container container">
          <div className="offer__gallery">
            <div className="offer__image-wrapper">
              <img className="offer__image" src={selectedOffer.previewImage} alt="Photo studio"></img>
            </div>
            <div className="offer__image-wrapper">
              <img className="offer__image" src={selectedOffer.previewImage} alt="Photo studio"></img>
            </div>
            <div className="offer__image-wrapper">
              <img className="offer__image" src={selectedOffer.previewImage} alt="Photo studio"></img>
            </div>
            <div className="offer__image-wrapper">
              <img className="offer__image" src={selectedOffer.previewImage} alt="Photo studio"></img>
            </div>
            <div className="offer__image-wrapper">
              <img className="offer__image" src={selectedOffer.previewImage} alt="Photo studio"></img>
            </div>
            <div className="offer__image-wrapper">
              <img className="offer__image" src={selectedOffer.previewImage} alt="Photo studio"></img>
            </div>
          </div>
        </div>
        <div className="offer__container container">
          <div className="offer__wrapper">
            <div className="offer__mark">
              <span>Premium</span>
            </div>
            <div className="offer__name-wrapper">
              <h1 className="offer__name">
                {selectedOffer.title}
              </h1>
              <button className="offer__bookmark-button button" type="button">
                <svg className="offer__bookmark-icon" width="31" height="33">
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="offer__rating rating">
              <div className="offer__stars rating__stars">
                <span style={{width: '80%'}}></span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="offer__rating-value rating__value">4.8</span>
            </div>
            <ul className="offer__features">
              <li className="offer__feature offer__feature--entire">
                {selectedOffer.type}
              </li>
              <li className="offer__feature offer__feature--bedrooms">
                3 Bedrooms
              </li>
              <li className="offer__feature offer__feature--adults">
                Max 4 adults
              </li>
            </ul>
            <div className="offer__price">
              <b className="offer__price-value">&euro;{selectedOffer.price}</b>
              <span className="offer__price-text">&nbsp;night</span>
            </div>
            <OfferInside/>
            <OfferHost/>
            <ReviewsSection/>
          </div>
        </div>
        <section className="offer__map map"></section>
      </section>
      <NearPlacesSection/>
    </main>
  ) : (
    <NotFoundedPage/>
  );
}

export default OfferPage;
