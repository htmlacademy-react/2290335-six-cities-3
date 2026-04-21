import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { useEffect } from 'react';
import {AppRoute, getAuthorizationStatus} from '../../const.ts';
import Layout from '../layout/layout.tsx';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page.tsx';
import FavoritePage from '../../pages/favorite-page/favorite-page.tsx';
import OfferPage from '../../pages/offer-page/offer-page.tsx';
import PrivateRoute from '../private-route/private-route.tsx';
import NotFoundedPage from '../../pages/not-founded-page/not-founded-page.tsx';
import { useAppDispatch } from '../../hooks/index.ts';
import { changeOffers } from '../../store/action.ts';
import { offers } from '../../mocks/offers.ts';
// import {TOffer, TComment, TOfferExtended} from '../../types.ts';

// type TOffersCommentsProps = {
//   extendedOffers: TOfferExtended[];
//   otherOffers: TOffer[];
//   comments: TComment[];
// }

const App = (): JSX.Element => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(changeOffers(offers));
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root}
          element={<Layout/>}
        >
          <Route index
            element={<MainPage/>}
          />
          <Route path={AppRoute.Login}
            element={<LoginPage/>}
          />
          {/* <Route path={AppRoute.Offer}>
            <Route path=":id"
              element={
                <OfferPage
                  extendedOffers = {extendedOffers}
                  otherOffers = {otherOffers}
                  comments = {comments}
                />
              }
            />
          </Route> */}
          {/* <Route path={AppRoute.Favorites}
            element={
              <PrivateRoute
                authorizationStatus = {getAuthorizationStatus()}
              >
                <FavoritePage/>
              </PrivateRoute>
            }
          /> */}
          <Route path='*'
            element={<NotFoundedPage/>}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

