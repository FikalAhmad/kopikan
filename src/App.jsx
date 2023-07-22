import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Global/styles";
import Landing from "./routes/Landing";
import Tentang from "./routes/Tentang";
import Product from "./routes/Produk";
import LoginPage from "./routes/LoginPage";
import RegisterPage from "./routes/RegisterPage";
import Dashboard from "./routes/Dashboard";
import CartPage from "./routes/CartPage";
import { AuthProvider } from "./components/myContext/AuthContext";
import PrivateRoute from "./components/myContext/PrivateRoute";
import OrderPage from "./routes/OrderPage";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/tentang" element={<Tentang />} />
          <Route
            exact
            path="/dashboard"
            element={<PrivateRoute component={Dashboard} />}
          />
          <Route
            path="/order"
            element={<PrivateRoute component={OrderPage} />}
          />
          <Route path="/produk" element={<Product />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/daftar" element={<RegisterPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
