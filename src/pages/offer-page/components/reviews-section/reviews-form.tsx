import { ReactEventHandler, useState, Fragment, FormEvent} from 'react';
import { api } from '../../../../store';
import {TComment} from '../../../../types';

type TChangeHandler = ReactEventHandler<HTMLInputElement | HTMLTextAreaElement>

type urlIdProps = {
  urlId: string | undefined;
  fetchComments: () => Promise<void>;
}

const ReviewsForm = ({urlId, fetchComments}: urlIdProps) => {
  const [review, setReview] = useState({rating: 0, review: ''});
  const [isSending, setIsSending] = useState(false);

  const handleChange: TChangeHandler = (event) => {
    const { name, value } = event.currentTarget;
    const newValue = name === 'rating' ? Number(value) : value;
    setReview({ ...review, [name]: newValue });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!urlId) {
      return;
    }

    setIsSending(true);

    try {
      await api.post<TComment>(`comments/${urlId}`, {
        comment: review.review,
        rating: review.rating
      });

      setReview({ rating: 0, review: '' });
      void fetchComments();
    } finally {
      setIsSending(false);
    }
  };

  const rating = [
    {value: 5, label: 'perfect'},
    {value: 4, label: 'good'},
    {value: 3, label: 'not bad'},
    {value: 2, label: 'badly'},
    {value: 1, label: 'terribly'},
  ];

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={(evt) => {
        void handleSubmit(evt);
      }}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {rating.map(({value, label}) => (
          <Fragment key={value}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              defaultValue={value}
              id={`${value}-stars`}
              type="radio"
              onChange={handleChange}
              disabled={isSending}
              checked={review.rating === value}
            />

            <label
              htmlFor={`${value}-stars`}
              className="reviews__rating-label form__rating-label"
              title={label}
            >
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleChange}
        value={review.review}
        disabled={isSending}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={review.review.length < 50 || review.rating === 0}
        >{isSending ? 'Sending...' : 'Submit'}
        </button>
      </div>
    </form>
  );
};

export default ReviewsForm;
