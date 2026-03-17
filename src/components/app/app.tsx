import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute} from '../../const.ts';
import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Offer from '../../pages/offer/offer';

type AppScreenProps = {
  numberOfPlaces: number;
}

function App({numberOfPlaces}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<Main numberOfPlaces = {numberOfPlaces}/>}/>
        <Route path={AppRoute.Login} element={<Login/>}/>
        <Route path={AppRoute.Favorites} element={<Favorites/>}/>
        <Route path={AppRoute.Offer} element={<Offer/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

