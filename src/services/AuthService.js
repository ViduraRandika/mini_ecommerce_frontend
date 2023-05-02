import axios from "axios";
axios.defaults.withCredentials = true;

const API_URL = "http://localhost:8000/api/";

export const isLoggedIn = async () => {
    try {
        const res = await axios.post(API_URL + "verify");
        return true;
    } catch (error) {
        return false;
    }
};


const AuthService = {
  isLoggedIn,
};

export default AuthService;