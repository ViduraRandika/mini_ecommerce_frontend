import axios from "axios";
axios.defaults.withCredentials = true;

const API_URL = "http://localhost:8000/api/";

export const isLoggedIn = async () => {
    try {
        await axios.post(API_URL + "verify");
        return true;
    } catch (error) {
        return false;
    }
};

export const getLoggedInUserDetails = async () => {
    try {
        const res = await axios.post(API_URL + "verify");
        return res.data;
    } catch (error) {
      return false;
    }
}

export const logout = async () => { 
    try {
        const res = await axios.post(API_URL + "logout");
        if (res.status !== 500) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        return false;
    }
}


const AuthService = {
  isLoggedIn,
    getLoggedInUserDetails,
  logout,
};

export default AuthService;