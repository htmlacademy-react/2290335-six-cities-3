import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute, getAuthorizationStatus} from '../../const.ts';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page.tsx';
import FavoritePage from '../../pages/favorite-page/favorite-page.tsx';
import OfferPage from '../../pages/offer-page/offer-page.tsx';
import PrivateRoute from '../private-route/private-route.tsx';
import NotFoundedPage from '../../pages/not-founded-page/not-founded-page.tsx';
import Layout from '../layout/layout.tsx';
import {TOfferProps} from '../../types.ts';


function App({offers}: TOfferProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<Layout/>}>
          <Route index
            element={<MainPage offers = {offers}/>}
          />
          <Route path={AppRoute.Login}
            element={<LoginPage/>}
          />
          <Route path={AppRoute.Offer}>
            <Route path=":id"
              element={<OfferPage offers = {offers} />}
            />
          </Route>
          <Route path={AppRoute.Favorites}
            element={<PrivateRoute authorizationStatus={getAuthorizationStatus()}><FavoritePage offers = {offers}/></PrivateRoute>}
          />
          <Route path='*'
            element={<NotFoundedPage/>}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

