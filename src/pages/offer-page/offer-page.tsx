import {useState} from 'react';
import {useParams} from 'react-router-dom';
import {TOffer, TComment, City} from '../../types';
import {OfferInside} from './components/offer-inside';
import {OfferHost} from './components/offer-host';
import NotFoundedPage from '../not-founded-page/not-founded-page';
import ReviewsSection from './components/reviews-section/reviews-section';
import NearPlacesSection from './components/near-places-section';
import Map from '../../components/map/map';
import {CITIES_MOCK} from '../../const';

const SELECTED_OFFER_IMAGES_ARRAY_LENGTH = 4;

type TOffersCommentsProps = {
  offers: TOffer[];
  comments: TComment[];
}

function OfferPage({offers, comments}: TOffersCommentsProps):JSX.Element {
  const [, setActiveOffer] = useState<TOffer>();
  const handleHover = (offer?: TOffer) => {
    setActiveOffer(offer);
  };

  const params = useParams();
  const selectedOffer = offers.find((item) => item.id === Number(params.id)) as TOffer;
  const imagesOfSelectedOffer = Array.from({ length: SELECTED_OFFER_IMAGES_ARRAY_LENGTH }, (_, index) => ({
    id: `id-${index}`,
    src: selectedOffer.previewImage,
  }));
  const cityMockAmsterdam: City = CITIES_MOCK[3];

  return selectedOffer ? (
    <main className="page__main page__main--offer">
      <section className="offer">
        <div className="offer__gallery-container container">
          <div className="offer__gallery">
            {imagesOfSelectedOffer.map((item) => (
              <div className="offer__image-wrapper" key={item.id}>
                <img className="offer__image"
                  src={item.src}
                  alt="Photo studio"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="offer__container container">
          <div className="offer__wrapper">
            {selectedOffer.isPremium && (
              <div className="offer__mark"><span/>Premium</div>
            )}
            <div className="offer__name-wrapper">
              <h1 className="offer__name">{selectedOffer.title}</h1>
              {selectedOffer.isFavorite && (
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
                <span style={{width: `${Math.round(selectedOffer.rating) * 20}%`}}/>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="offer__rating-value rating__value">{selectedOffer.rating}</span>
            </div>
            <ul className="offer__features">
              <li className="offer__feature offer__feature--entire">{selectedOffer.type}</li>
              <li className="offer__feature offer__feature--bedrooms">3 Bedrooms</li>
              <li className="offer__feature offer__feature--adults"> Max 4 adults</li>
            </ul>
            <div className="offer__price">
              <b className="offer__price-value">&euro;{selectedOffer.price}</b>
              <span className="offer__price-text">&nbsp;night</span>
            </div>
            <OfferInside/>
            <OfferHost/>
            <ReviewsSection comments = {comments}/>
          </div>
        </div>
        <Map offers={offers} city={cityMockAmsterdam} selectedOffer = {selectedOffer}/>
      </section>
      <NearPlacesSection handleHover = {handleHover} offers = {offers}/>
    </main>
  ) : (
    <NotFoundedPage/>
  );
}

export default OfferPage;
