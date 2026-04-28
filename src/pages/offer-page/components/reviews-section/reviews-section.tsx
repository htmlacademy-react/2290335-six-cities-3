import {AuthorizationStatus} from '../../../../const';
import { useAppSelector } from '../../../../hooks';
import {TComment} from '../../../../types';
import ReviewsForm from './reviews-form';
import ReviewsList from './reviews-list';

type TCommentsProps = {
  comments: TComment[] | null;
}

const ReviewsSection = ({comments}: TCommentsProps):JSX.Element => {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount"></span></h2>
      <ReviewsList comments = {comments}/>
      {authorizationStatus === AuthorizationStatus.Auth ? (
        <ReviewsForm/>
      ) : null}
    </section>
  );
};

export default ReviewsSection;
