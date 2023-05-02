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

const ProductService = {
  addNewProduct,
};

export default ProductService;
