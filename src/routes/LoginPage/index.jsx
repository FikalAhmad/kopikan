import { Link, useNavigate } from "react-router-dom";
import { loginContainer } from "./styles";
import Logo from "/src/assets/logo/logotype-black.png";
import LeftArrow from "/src/assets/icon/left-arrow.png";
import { useEffect, useState } from "react";
import useAppContext from "../../components/myContext/useAppContext";

const LoginPage = () => {
  const { login, authenticated } = useAppContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const isLogin = () => {
      authenticated && navigate("/order");
    };
    isLogin();
  }, [authenticated, navigate]);

  const LoginUser = async (e) => {
    e.preventDefault();
    await login(email, password, (msg) => {
      setMessage(msg);
    });
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
          <p className="p--desc">Login untuk order Kopikan</p>
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
            <p className="p--message">{message}</p>
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
