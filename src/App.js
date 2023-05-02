import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import FavouriteProducts from './components/FavouriteProducts';
import MainLayout from './components/MainLayout';
import MainPage from './components/MainPage';
import SearchResults from './components/SearchResults';
import Register from './components/Register';

function App() {
  return (
    <>
      <BrowserRouter basename='/'>
        <Routes>
          <Route exact path="/register" element={ <Register/> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
{/* <MainLayout Component={SearchResults}/> */}
