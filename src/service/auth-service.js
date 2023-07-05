import axios from "axios";
import { LOGIN_CONTEXT, SIGNUP_CONTEXT } from "../utils/Paths";


const register = async (values) => {
  const registerDTO = { ...values };
  return await axios.post(SIGNUP_CONTEXT, registerDTO);
};

const login = async (email, password) => {  
  return await axios({
    method: "post",
    url: LOGIN_CONTEXT,
    data: { email , password },
    headers: { "Content-Type": "application/json" },
  });
};

const logout = () => {
  localStorage.removeItem("access_token");
};

const hasToken = () => {
  return localStorage.getItem("access_token");
}; 

const AuthService = {
  register,
  login,
  logout,
  hasToken, 
};

export default AuthService;
