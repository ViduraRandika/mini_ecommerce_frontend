import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import FavouriteProducts from './components/FavouriteProducts';
import MainLayout from './components/MainLayout';
import MainPage from './components/MainPage';
import SearchResults from './components/SearchResults';
import Register from './components/Register';
import Login from './components/Login';
import VendorPrivateRoute from './components/VendorPrivateRoute';
import AddProduct from './components/AddProduct';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import EditProduct from './components/EditProduct';

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover={false}
        pauseOnFocusLoss={false}
      />
      <BrowserRouter basename="/">
        <Routes>
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />

          {/* ONLY LOGGED IN VENDORS CAN ACCESS */}
          <Route element={<VendorPrivateRoute />}>
            <Route
              exact
              path="/"
              element={<MainLayout Component={MainPage} title={"PRODUCTS"} />}
            />
            <Route
              exact
              path="/favourite-products"
              element={
                <MainLayout
                  Component={FavouriteProducts}
                  title={"FAVOURITE PRODUCTS"}
                />
              }
            />
            <Route
              exact
              path="/search/:id"
              element={
                <MainLayout Component={SearchResults} title={"PRODUCTS"} />
              }
            />
            <Route exact path="/add-new-product" element={<AddProduct />} />
            <Route exact path="/edit-product/:id" element={<EditProduct />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;