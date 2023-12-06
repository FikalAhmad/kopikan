import axios from "axios";
// const API_URL = "http://localhost:5000";
const AuthService = {
  login: async (email, password) => {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/login`, {
      email,
      password,
    });

    if (response.data) {
      const data = response.data;
      localStorage.setItem("token", data.accessToken);
      return true;
    } else {
      throw new Error(response.data.msg);
    }
  },
  logout: async () => {
    await axios.delete(`${import.meta.env.VITE_API_URL}/logout`);
    localStorage.removeItem("token");
    localStorage.removeItem("carts");
  },
};

export default AuthService;
