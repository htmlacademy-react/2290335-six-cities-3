import {useEffect, useMemo, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {TOffer, TOfferExtended, TComment} from '../../types';
import {OfferInside} from './components/offer-inside';
import {OfferHost} from './components/offer-host';
import {ClassNamesForMap, AppRoute, AuthorizationStatus} from '../../const';
import {api} from '../../store';
import NotFoundPage from '../not-found-page/not-found-page';
import ReviewsSection from './components/reviews-section/reviews-section';
import NearPlacesSection from './components/near-places-section';
import Map from '../../components/map/map';
import LoadingScreen from '../../components/loading-screen/loading-screen';
import { toggleFavoriteAction } from '../../store/api-actions';

const LIMIT_PICTURES = 3;

function OfferPage(): JSX.Element {
  const {id: urlId} = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  // const anotherOffers = useAppSelector((state) => state.offers);
  const currentCity = useAppSelector((state) => state.currentCity);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const [offer, setOffer] = useState<TOfferExtended | null>(null);
  const [comments, setComments] = useState<TComment[] | null>(null);
  const [nearbyOffers, setNearbyOffers] = useState<TOffer[] | null>(null);
  const [, setActiveOffer] = useState<TOffer | undefined>();
  const [isLoading, setIsLoading] = useState(true);

  const offersForMap = useMemo(() => {
    if (!nearbyOffers || !offer) {
      return [];
    }
    return [...nearbyOffers.slice(0, LIMIT_PICTURES), offer];
  }, [nearbyOffers, offer]);

  useEffect(() => {
    if (!urlId) {
      return;
    }
    let isMounted = true;

    Promise.all([
      api.get<TOfferExtended>(`offers/${urlId}`),
      api.get<TOffer[]>(`offers/${urlId}/nearby`),
      api.get<TComment[]>(`comments/${urlId}`)
    ])
      .then(([offerData, nearbyData, commentsData]) => {
        if (isMounted) {
          setOffer(offerData.data);
          setNearbyOffers(nearbyData.data);
          setComments(commentsData.data);
        }
      })
      .catch(() => {
        if (isMounted) {
          setOffer(null); // Это триггернет NotFoundPage
        }
      })
      .finally(() => {
        if (isMounted) {
          setIsLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [urlId]);

  const handleHover = (selectedOffer?: TOffer) => {
    setActiveOffer(selectedOffer);
  };

  if (isLoading) {
    return <LoadingScreen/>;
  }

  if (!offer) {
    return <NotFoundPage/>;
  }

  const {title, type, price, isFavorite, isPremium, rating, description, bedrooms, host, goods, images, maxAdults, id} = offer;

  const handleFavoriteClick = async () => {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      navigate(AppRoute.Login);
      return;
    }
    const nextStatus = isFavorite ? 0 : 1;
    const resultAction = await dispatch(toggleFavoriteAction({id, status: nextStatus}));
    if (toggleFavoriteAction.fulfilled.match(resultAction)) {
      setOffer(resultAction.payload as TOfferExtended);
    }
  };

  return (
    <main className="page__main page__main--offer">
      <section className="offer">
        <div className="offer__gallery-container container">
          <div className="offer__gallery">
            {images.map((item) => (
              <div className="offer__image-wrapper"
                key={item}
              >
                <img
                  className="offer__image"
                  src={item}
                  alt="Photo studio"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="offer__container container">
          <div className="offer__wrapper">
            {isPremium && (
              <div className="offer__mark"><span/>Premium</div>
            )}
            <div className="offer__name-wrapper">
              <h1 className="offer__name">{title}</h1>
              <button
                className={`offer__bookmark-button button
                  ${isFavorite ? 'offer__bookmark-button--active' : ''}`}
                type="button"
                onClick={() => {
                  handleFavoriteClick();
                }}
              >
                <svg className="offer__bookmark-icon"
                  width="31"
                  height="33"
                >
                  <use xlinkHref="#icon-bookmark"/>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
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
            <OfferInside
              goods = {goods}
            />
            <OfferHost
              host = {host}
              description = {description}
            />
            <ReviewsSection
              comments = {comments}
              urlId = {urlId}
            />
          </div>
        </div>

        {offersForMap &&
          <Map
            offers = {offersForMap}
            city = {currentCity}
            selectedPoint = {offer}
            ClassNamesForMap = {ClassNamesForMap.Offer}
          />}
      </section>

      {offersForMap &&
        <NearPlacesSection
          handleHover = {handleHover}
          otherOffers = {nearbyOffers?.slice(0, LIMIT_PICTURES) || []}
        />}
    </main>
  );
}

export default OfferPage;
