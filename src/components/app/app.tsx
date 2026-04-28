import {Route, Routes} from 'react-router-dom';
import PrivateRoute from '../private-route/private-route.tsx';
import {AppRoute, AuthorizationStatus} from '../../const.ts';
import Layout from '../layout/layout.tsx';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page.tsx';
import FavoritePage from '../../pages/favorite-page/favorite-page.tsx';
import OfferPage from '../../pages/offer-page/offer-page.tsx';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import LoadingScreen from '../loading-screen/loading-screen.tsx';
import NotFoundedPage from '../../pages/not-founded-page/not-founded-page.tsx';
import { useAppSelector } from '../../hooks/index.ts';
import { store } from '../../store/index.ts';
import { fetchQuestionAction } from '../../store/api-actions.ts';
import { useEffect } from 'react';

const App = (): JSX.Element => {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isQuestionsDataLoading = useAppSelector((state) => state.isQuestionsDataLoading);

  useEffect(() => {
    store.dispatch(fetchQuestionAction());
  }, []);

  if (authorizationStatus === AuthorizationStatus.Unknown || isQuestionsDataLoading) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Root}
          element={<Layout/>}
        >
          <Route index
            element={
              <PrivateRoute authorizationStatus = {authorizationStatus}>
                <MainPage/>
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.Login}
            element={<LoginPage/>}
          />
          <Route path={AppRoute.Offer}>
            <Route path=":id"
              element={<OfferPage/>}
            />
          </Route>
          <Route path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus = {authorizationStatus}>
                <FavoritePage/>
              </PrivateRoute>
            }
          />
          <Route path='*'
            element={<NotFoundedPage/>}
          />
        </Route>
      </Routes>
    </HistoryRouter>
  );
};

export default App;

