import {Fragment} from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

const NotFoundPage = ():JSX.Element => (
  <Fragment>
    <h1>
      404.
      <br />
      <small>Page not found</small>
    </h1>
    <Link to={AppRoute.Root}>Go to main page</Link>
  </Fragment>
);

export default NotFoundPage;
