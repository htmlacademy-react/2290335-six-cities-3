import {TOffer} from '../../../../types';

type TOfferProp = {
  offer: TOffer;
}

function NearPlacesCard ({offer}:TOfferProp):JSX.Element {
  const {id, title, previewImage, price, isPremium, isFavorite, type, rating} = offer;
  return (
    <article className="near-places__card place-card" key={id}>
      {isPremium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div> : ''}
      <div className="near-places__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image"/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">`&euro;${price}`</b>
            <span className="place-card__price-text"/>&#47;&nbsp;night
          </div>
          <button className={`place-card__bookmark-button button ${isFavorite ? 'place-card__bookmark-button--active' : ''}`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"/>
            </svg>
            <span className="visually-hidden"/>In bookmarks
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${Math.round(rating) * 20}%`}}></span>
            <span className="visually-hidden"/>Rating
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#"/>{title}
        </h2>
        <p className="place-card__type"/>{type}
      </div>
    </article>
  );
}

export default NearPlacesCard;
