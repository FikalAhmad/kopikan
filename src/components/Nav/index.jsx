import { navContainer } from "./styles";
import Button from "../Button";
import LogotypeBlack from "/src/assets/logo/logotype-black.png";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../myContext/AuthContext";
// import profileIcon from "/src/assets/icon/profile-white.png";
// import cartIcon from "/src/assets/icon/cart-white.png";
import Dropdown from "../Dropdown";
import CartCount from "../CartCount";

const Navbar = () => {
  const { authenticated } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className={navContainer}>
      <div className="nav--logo">
        <img src={LogotypeBlack} alt="" className="logo--image" />
      </div>
      <div className={`list--menu ${isMenuOpen ? "active" : ""}`}>
        <ul className="ul--menu">
          <li>
            {authenticated ? (
              <Link to="/dashboard" className="item--link">
                Beranda
              </Link>
            ) : (
              <Link to="/" className="item--link">
                Beranda
              </Link>
            )}
          </li>
          <li>
            <Link to="/tentang" className="item--link">
              Tentang
            </Link>
          </li>
          <li>
            <Link to="/produk" className="item--link">
              Produk
            </Link>
          </li>
        </ul>
      </div>
      {authenticated ? (
        <div className="nav--icon">
          <CartCount />
          {/* <button className="icon--btn icon__btn">
            <span>{name}</span>
            <img src={profileIcon} alt="" className="icon" />
          </button> */}
          <Dropdown />
          <Button fill link="/order">
            Pesan Disini
          </Button>
        </div>
      ) : (
        <div className="nav--button">
          {/* <Button link="/login" fill>
            Login
            </Button>
          <Button link="/daftar">Daftar</Button> */}

          <Button fill link="/order">
            Pesan Disini
          </Button>
        </div>
      )}
      <div
        className={`burger-icon ${isMenuOpen ? "active" : ""}`}
        onClick={handleMenuClick}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;
