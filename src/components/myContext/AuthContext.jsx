import { createContext, useState, useEffect } from "react";
import AuthService from "./AuthService";
import jwt_decode from "jwt-decode";
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "",
    id: "",
  });
  const [auth, setAuth] = useState({
    token: "",
    expire: "",
  });

  const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = jwt_decode(token);
      setUser({
        name: decoded.name,
        id: decoded.userId,
      });
      setAuth({
        token: token,
        expire: decoded.exp,
      });
    }
    const axiosJWT = axios.create();
    axiosJWT.interceptors.request.use(
      async (config) => {
        const currentDate = new Date();
        if (auth.expire * 1000 < currentDate.getTime()) {
          const response = await axios.get(
            `${import.meta.env.VITE_API_URL}/token`
          );
          config.headers.Authorization = `Bearer ${response.data.accessToken}`;
          const decoded = jwt_decode(token);
          setAuth({
            token: response.data.accessToken,
            expire: decoded.exp,
          });
          setUser((prevItem) => ({
            ...prevItem,
            name: decoded.name,
          }));
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }, [authenticated, auth.expire, auth.name]);

  const login = async (email, password, onFail) => {
    try {
      await AuthService.login(email, password);
      setAuthenticated(true);
    } catch (error) {
      onFail(error.response.data.msg);
    }
  };

  const logout = () => {
    AuthService.logout();
    setAuthenticated(false);
  };

  const authContextValue = {
    authenticated,
    login,
    logout,
    // user doang juga bisa tapi nnti dikomponen lain jadi user.name
    name: user.name,
    idUser: user.id,
  };
  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
