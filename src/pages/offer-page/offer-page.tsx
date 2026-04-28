import {useEffect, useState} from 'react';
import {useAppSelector} from '../../hooks';
import {TOffer, TOfferExtended, TComment} from '../../types';
import {OfferInside} from './components/offer-inside';
import {OfferHost} from './components/offer-host';
import NotFoundedPage from '../not-founded-page/not-founded-page';
import ReviewsSection from './components/reviews-section/reviews-section';
import NearPlacesSection from './components/near-places-section';
import Map from '../../components/map/map';
import {classNamesForMap} from '../../const';
import {api} from '../../store';
import LoadingScreen from '../../components/loading-screen/loading-screen';


function OfferPage(): JSX.Element {
  const currentCity = useAppSelector((state) => state.currentCity);
  const urlId = useAppSelector((state) => state.currentOffer);

  // Загруженный выбранный оффер, комментарии, все остальные офферы
  const [offer, setOffer] = useState<TOfferExtended | null>(null);
  const [comments, setComments] = useState<TComment[] | null>(null);
  const [nearbyOffers, setNearbyOffers] = useState<TOffer[] | null>(null);
  // Процесс загрузки
  const [isLoading, setIsLoading] = useState(true);
  const [activeOffer, setActiveOffer] = useState<TOffer | undefined>();

  useEffect(() => {
    let isMounted = true;

    const fetchOffer = async () => {
      try {
        setIsLoading(true);
        const { data } = await api.get<TOfferExtended>(`offers/${urlId}`);
        const { data: commentsData } = await api.get<TComment[]>(`comments/${urlId}`);
        const { data: nearbyData } = await api.get<TOffer[]>(`offers/${urlId}/nearby`);
        if (isMounted) {
          setOffer(data);
          setComments(commentsData);
          setNearbyOffers(nearbyData);
        }
      } catch {
        // Ошибка
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchOffer();
    return () => {
      isMounted = false;
    };
  }, [urlId]);

  const handleHover = (selectedOffer?: TOffer) => {
    setActiveOffer(selectedOffer);
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (!offer) {
    return <NotFoundedPage />;
  }

  const { title, type, price, isFavorite, isPremium, rating, description, bedrooms, host, goods, images, maxAdults} = offer;

  return (
    <main className="page__main page__main--offer">
      <section className="offer">
        <div className="offer__gallery-container container">
          <div className="offer__gallery">
            {images.map((item) => (
              <div className="offer__image-wrapper" key={item}>
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
        <Map
          offers = {nearbyOffers}
          city = {currentCity}
          selectedPoint = {activeOffer}
          classNamesForMap = {classNamesForMap.Offer}
        />
      </section>
      <NearPlacesSection
        handleHover = {handleHover}
        otherOffers = {nearbyOffers}
      />
    </main>
  );
}

export default OfferPage;
