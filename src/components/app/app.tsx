import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const.ts';
import Main from '../../pages/main-page/main-page';
import Login from '../../pages/login-page/login-page.tsx';
import Favorites from '../../pages/favorites-page/favorites-page.tsx';
import Offer from '../../pages/offer-page/offer-page.tsx';
import PrivateRoute from '../private-route/private-route.tsx';
import NotFoundedPage from '../../pages/not-founded-page/not-founded-page.tsx';
import Layout from '../layout/layout.tsx';

type AppScreenProps = {
  numberOfPlaces: number;
}

function App({numberOfPlaces}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<Layout/>}>
          <Route index element={<Main numberOfPlaces = {numberOfPlaces}/>}/>
          <Route path={AppRoute.Login} element={<Login/>}/>
          <Route path={AppRoute.Favorites} element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}><Favorites/></PrivateRoute>
          }
          />
          <Route path={AppRoute.Offer} element={<Offer/>}/>
          <Route path='*' element={<NotFoundedPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

