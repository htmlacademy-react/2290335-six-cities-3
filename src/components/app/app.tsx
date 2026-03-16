import Header from '../header/header';
import Main from '../../pages/main/main';

type AppProps = {
  numberOfPlaces: number;
}

function App({numberOfPlaces}: AppProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header/>
      <Main numberOfPlaces = {numberOfPlaces}/>
    </div>
  );
}

export default App;

