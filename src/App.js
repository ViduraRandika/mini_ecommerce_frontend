import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import FavouriteProducts from './components/FavouriteProducts';
import MainLayout from './components/MainLayout';
import MainPage from './components/MainPage';
import SearchResults from './components/SearchResults';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <>
      <BrowserRouter basename='/'>
        <Routes>
          <Route exact path="/register" element={ <Register/> } />
          <Route exact path="/login" element={ <Login/> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
{/* <MainLayout Component={SearchResults}/> */}
