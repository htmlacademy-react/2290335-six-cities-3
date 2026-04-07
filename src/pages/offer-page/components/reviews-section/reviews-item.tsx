import {TComment} from '../../../../types';

type TCommentProp = {
  review: TComment;
}

const ReviewsItem = ({review}: TCommentProp):JSX.Element => {
  const {id, comment, date, rating, user} = review;
  return (
    <li className="reviews__item" id={`${id}`}>
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar"
            src={`${user.avatarUrl}`}
            width="54" height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name"/>{user.name}
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${Math.round(rating) * 20}%`}}/>
            <span className="visually-hidden"/>Rating
          </div>
        </div>
        <p className="reviews__text"/>{comment}
        <time className="reviews__time" dateTime={`${date}`}/>April 2019
      </div>
    </li>
  );
};

export default ReviewsItem;
