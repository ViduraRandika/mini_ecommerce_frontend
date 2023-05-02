import axios from "axios";
axios.defaults.withCredentials = true;

const API_URL = "http://localhost:8000/api/products/";

export const addNewProduct = async (data) => {
  const res = await axios.post(API_URL,data);
  if (res.status === 401) {
    return false;
  } else {
    return res.data;
  }
};

export const getAllProducts = async () => {
  const res = await axios.get(API_URL);
  if (res.status === 401) {
    return false;
  } else {
    return res.data;
  }
};

export const getAllFavouriteProducts = async () => {
  const res = await axios.get(API_URL + "favourites");
  if (res.status === 401) {
    return false;
  } else {
    return res.data;
  }
};

export const deleteSelectedProduct = async (id) => {
  const res = await axios.delete(API_URL + id);
  if (res.status === 401) {
    return false;
  } else {
    return true;
  }
};

export const getSelectedProductDetails = async (id) => {
  const res = await axios.get(API_URL + id);
  if (res.status === 401) {
    return false;
  } else {
    return res.data;
  }
};

export const updateSelectedProduct = async (id, data) => {
  const res = await axios.put(API_URL + id, data);
  if (res.status === 401) {
    return false;
  } else {
    return res.data;
  }
};

export const addToFavourite = async (id) => {
  const res = await axios.put(API_URL + "add-to-favourite/" + id);
  if (res.status === 401) {
    return false;
  } else {
    return res.data;
  }
};

export const removeFromFavourite = async (id) => {
  const res = await axios.put(API_URL + "remove-from-favourite/" + id);
  if (res.status === 401) {
    return false;
  } else {
    return res.data;
  }
};

export const searchProduct = async (id) => {
  const data = {
    query: id,
  };
  const res = await axios.post(API_URL + "search", data);
  if (res.status === 401) {
    return false;
  } else {
    return res.data;
  }
};

const ProductService = {
  addNewProduct,
  getAllProducts,
  getSelectedProductDetails,
  updateSelectedProduct,
  removeFromFavourite,
  searchProduct,
};

export default ProductService;
