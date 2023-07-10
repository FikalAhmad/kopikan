import { Link, useNavigate } from "react-router-dom";
import { loginContainer } from "./styles";
import Logo from "/src/assets/logo/logotype-black.png";
import { useState } from "react";
import axios from "axios";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const LoginUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/login", {
        email,
        password,
      });
      navigate("/testing");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={loginContainer}>
      <div>
        <Link to="/">
          <img src={Logo} alt="" className="logo" />
        </Link>
      </div>
      <div className="">
        <div className="login--container">
          <h1>Login</h1>
          <p>Login untuk order Kopikan</p>
          <form onSubmit={LoginUser} className="form">
            <label className="form--label">
              Email:
              <input
                type="text"
                className="form--input"
                placeholder="Masukan Email Kamu"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </label>
            <label className="form--label">
              Password:
              <input
                type="password"
                className="form--input"
                placeholder="Masukan Password Kamu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </label>
            {/* <input type="submit" value="Login" className="form--submit" /> */}
            <button
              type="submit"
              className="form--submit"
              onClick={() => alert("Testing")}
            >
              Login
            </button>
          </form>
          <p className="p--daftar">
            Belum punya akun?
            <Link to="/daftar" className="p--link">
              Daftar disini
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
