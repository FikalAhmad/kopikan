import { Link, useNavigate } from "react-router-dom";
import { registerContainer } from "./styles";
import Logo from "/src/assets/logo/logotype-black.png";
import LeftArrow from "/src/assets/icon/left-arrow.png";
import { useState } from "react";
import axios from "axios";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const navigate = useNavigate();

  const postUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", {
        name,
        email,
        password,
        confPassword,
      });
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={registerContainer}>
      <div className="nav--back">
        <Link to="/" className="link--back">
          <img src={LeftArrow} alt="" />
          Back
        </Link>
        <div>
          <Link to="/" className="link--back">
            <img src={Logo} alt="" className="logo" />
          </Link>
        </div>
      </div>
      <div className="">
        <div className="daftar--container">
          <h1>Daftar</h1>
          <p>Daftarkan akun KOPIKAN kamu disini</p>
          <form onSubmit={postUser} className="form">
            <label className="form--label">
              Nama Lengkap:
              <input
                type="text"
                className="form--input"
                placeholder="Masukan Nama Lengkap Kamu"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </label>
            <label className="form--label">
              Email:
              <input
                type="email"
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
            <label className="form--label">
              Ulangi Password:
              <input
                type="password"
                className="form--input"
                placeholder="Masukan Password Kamu Lagi"
                value={confPassword}
                onChange={(e) => setConfPassword(e.target.value)}
              ></input>
            </label>
            <input type="submit" value="Daftar" className="form--submit" />
            <label className="p--daftar">
              Sudah punya akun?
              <Link to="/login" className="p--link">
                Login disini
              </Link>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
