import './App.css';
import FavouriteProducts from './components/FavouriteProducts';
import MainLayout from './components/MainLayout';
import MainPage from './components/MainPage';
import SearchResults from './components/SearchResults';

function App() {
  return (
    <MainLayout Component={SearchResults}/>
  );
}

export default App;
