import { Link, useNavigate } from "react-router-dom";
import { loginContainer } from "./styles";
import Logo from "/src/assets/logo/logotype-black.png";
import LeftArrow from "/src/assets/icon/left-arrow.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../components/myContext/AuthContext";

const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const LoginUser = async (e) => {
    e.preventDefault();
    await login(email, password);
    navigate("/order");
  };

  return (
    <div className={loginContainer}>
      <div className="nav--back">
        <Link to="/" className="link--back">
          <img src={LeftArrow} alt="" />
          Back
        </Link>
        <Link to="/" className="link--back">
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
            <button type="submit" className="form--submit">
              Login
            </button>
            <label className="p--daftar">
              Belum punya akun?
              <Link to="/daftar" className="p--link">
                Daftar disini
              </Link>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
