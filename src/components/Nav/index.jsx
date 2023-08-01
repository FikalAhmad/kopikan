import { navContainer } from "./styles";
import Button from "../Button";
import LogotypeBlack from "/src/assets/logo/logotype-black.png";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../myContext/AuthContext";
import Dropdown from "../Dropdown";
import CartCount from "../CartCount";
import Tabs from "../Tabs";

const Navbar = () => {
  const { authenticated } = useContext(AuthContext);
  const { logout } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleLogout = async () => {
    await logout();
  };

  return (
    <nav className={navContainer}>
      <div className="first--wrap">
        <div className="nav--logo">
          <img src={LogotypeBlack} alt="" className="logo--image" />
        </div>
        <div className={`list--menu ${isMenuOpen ? "active" : ""}`}>
          <ul className="ul--menu">
            <li>
              {authenticated ? (
                <Link to="/dashboard" className="item--link">
                  Home
                </Link>
              ) : (
                <Link to="/" className="item--link">
                  Home
                </Link>
              )}
            </li>
            <li>
              <Link to="/tentang" className="item--link">
                About
              </Link>
            </li>
            <li>
              <Link to="/produk" className="item--link">
                Product
              </Link>
            </li>
            {authenticated && (
              <li className="item--link-new">
                <Link to="/profile" className="item--link-new">
                  Profile
                </Link>
              </li>
            )}
            {authenticated && (
              <li className="item--link-new">
                <Link to="/" className="item--link-new" onClick={handleLogout}>
                  Logout
                </Link>
              </li>
            )}
          </ul>
        </div>
        {authenticated ? (
          <div className="nav--icon">
            <CartCount />
            <Dropdown />
            <Button fill link="/order">
              Order Here
            </Button>
          </div>
        ) : (
          <div className="nav--button">
            <Button fill link="/order">
              Order Here
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
      </div>
      {authenticated ? (
        <div className="second--wrap">
          <Tabs />
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;
