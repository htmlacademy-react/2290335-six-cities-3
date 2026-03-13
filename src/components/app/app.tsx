import Header from '../header/header';
import MainScreen from '../../pages/main-screen/main-screen';

type AppScreenProps = {
  numberOfPlaces: number;
}

function App({numberOfPlaces}: AppScreenProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header/>
      <MainScreen numberOfPlaces = {numberOfPlaces}/>
    </div>
  );
}

export default App;

