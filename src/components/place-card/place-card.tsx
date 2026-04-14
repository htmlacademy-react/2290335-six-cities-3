import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {TOffer} from '../../types';
import {useAppDispatch} from '../../hooks';
import {changeCurrentCity} from '../../store/action';

type TPlaceCardProps = {
  typeClassName: 'root' | 'offer' | 'favorites';
  offer: TOffer;
}

function PlaceCard({typeClassName, offer}: TPlaceCardProps) {
  const dispatch = useAppDispatch();
  let className;
  let widthPictureCardImage = 260;
  let heigthPictureCardImage = 200;
  switch (true) {
    case typeClassName === 'root': className = 'cities';
      break;
    case typeClassName === 'offer': className = 'near-places';
      break;
    case typeClassName === 'favorites': className = 'favorites';
      widthPictureCardImage = 150;
      heigthPictureCardImage = 110;
      break;
  }

  const {id, title, previewImage, price, isPremium, isFavorite, type, rating} = offer;

  return (
    <article className={`${className}__card place-card`}
      key={id} onMouseEnter={() => dispatch(changeCurrentCity(offer))}
    >
      {isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className={`${className}__image-wrapper place-card__image-wrapper`}>
        <Link to={`${AppRoute.Offer}/${id}`}>
          <img className="place-card__image" src={previewImage} width={widthPictureCardImage} height={heigthPictureCardImage} alt="Place image"></img>
        </Link>
      </div>
      <div className={`${className}__card-info place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${isFavorite ? 'place-card__bookmark-button--active' : ''}`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${Math.round(rating) * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
