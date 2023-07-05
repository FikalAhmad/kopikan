import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Global/styles";
import Landing from "./routes/Landing";
import Tentang from "./routes/Tentang";
import Product from "./routes/Produk";
import LoginPage from "./routes/LoginPage";
import RegisterPage from "./routes/RegisterPage";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/tentang" element={<Tentang />}></Route>
          <Route path="/produk" element={<Product />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/daftar" element={<RegisterPage />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
