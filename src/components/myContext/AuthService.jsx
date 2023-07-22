import axios from "axios";

// Assuming you have an API endpoint for authentication
const API_URL = "http://localhost:5000";
const AuthService = {
  login: async (email, password) => {
    const response = await axios.post(`${API_URL}/login`, {
      email,
      password,
    });

    if (response.data) {
      const data = response.data;
      localStorage.setItem("token", data.accessToken);
      return true;
    } else {
      throw new Error("Login failed");
    }
  },
  logout: async () => {
    await axios.delete(`${API_URL}/logout`);
    localStorage.removeItem("token");
    localStorage.removeItem("carts");
  },
};

export default AuthService;
