import React, { createContext, useState, useEffect } from "react";
import AuthService from "./AuthService";
import jwt_decode from "jwt-decode";
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [token, setToken] = useState("");
  const [name, setName] = useState("");
  const [expire, setExpire] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
      const decoded = jwt_decode(token);
      setName(decoded.name);
      setExpire(decoded.exp);
    }
    const axiosJWT = axios.create();
    axiosJWT.interceptors.request.use(
      async (config) => {
        const currentDate = new Date();
        if (expire * 1000 < currentDate.getTime()) {
          const response = await axios.get("http://localhost:5000/token");
          console.log(response);
          config.headers.Authorization = `Bearer ${response.data.accessToken}`;
          setToken(response.data.accessToken);
          const decoded = jwt_decode(token);
          setName(decoded.name);
          setExpire(decoded.exp);
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }, [authenticated]);

  const login = async (email, password) => {
    try {
      await AuthService.login(email, password);
      setAuthenticated(true);
    } catch (error) {
      console.error(error);
    }
  };

  const logout = () => {
    AuthService.logout();
    setAuthenticated(false);
  };
  return (
    <AuthContext.Provider value={{ authenticated, login, logout, name, token }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
