import axios from "axios";
axios.defaults.withCredentials = true;

const API_URL = "http://localhost:8000/api/";

export const isLoggedIn = async () => {
    const res = await axios.post(API_URL + "verify");
    if (res.status === 401) {
      return false;
    } else {
      return true;
    }
};


const AuthService = {
  isLoggedIn,
};

export default AuthService;