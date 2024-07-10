import axios, { AxiosError } from "axios";
import { ILoginProps, IRegisterProps, ResponseModel } from "../types/types";
import { baseUrl, ENDPOINTS } from "../utils/helpers/endpoints";
import { jwtDecode, JwtPayload } from "jwt-decode";

interface DecodedToken extends JwtPayload {
  username: string;
}

const register = async (user: IRegisterProps) => {
  await axios.post(`${baseUrl}/user`, user);
};

const login = async (user: ILoginProps) => {
  const response = await axios.post(`${baseUrl}/auth/verifyUser`, user);
  if (response.data.success) {
    localStorage.setItem("token", response.data.data.token);
  }
  return response.data.data;
};

const checkUser = async (token: string) => {
  try {
    const decodedToken = jwtDecode<DecodedToken>(token);
    const username = decodedToken.username;
    const response = await axios.get(ENDPOINTS.getUser(username), {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    if (response.statusText == "OK" && response.data.data != null)
      return response.data.success;
    return false;
  } catch (err: any) {
    console.log("the error", err.response.data.message);
    return false;
  }
};

const logout = () => {
  localStorage.removeItem("token");
};

const getCurrentUser = () => {
  return localStorage.getItem("token");
};

export default {
  register,
  login,
  logout,
  checkUser,
  getCurrentUser,
};
