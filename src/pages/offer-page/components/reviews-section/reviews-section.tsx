import {AuthorizationStatus, getAuthorizationStatus} from '../../../../const';
import {TComment} from '../../../../types';
import ReviewsForm from './reviews-form';
import ReviewsList from './reviews-list';

type TCommentsProps = {
  comments: TComment[];
}

const ReviewsSection = ({comments}: TCommentsProps):JSX.Element => (
  <section className="offer__reviews reviews">
    <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
    <ReviewsList comments = {comments}/>
    {getAuthorizationStatus() === AuthorizationStatus.Auth ? (
      <ReviewsForm/>
    ) : null}
  </section>
);

export default ReviewsSection;
