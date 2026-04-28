import ReviewsItem from './reviews-item';
import {TComment} from '../../../../types';

type TCommentsProps = {
  comments: TComment[] | null;
}

const ReviewsList = ({comments}: TCommentsProps) => (
  comments !== null ? (
    <ul className="reviews__list">
      {comments.map((review) => (
        <ReviewsItem review = {review} key={review.id}/>
      ))}
    </ul>
  ) : ''
);


export default ReviewsList;
