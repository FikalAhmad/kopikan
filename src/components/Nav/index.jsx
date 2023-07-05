import { navContainer } from "./styles";
import Button from "../Button";
import LogotypeBlack from "/src/assets/logo/logotype-black.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={navContainer}>
      <div className="nav--logo">
        <img src={LogotypeBlack} alt="" className="logo--image" />
      </div>
      <ul className="list--menu">
        <li>
          <Link to="/" className="item--link">
            Beranda
          </Link>
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
      <div className="nav-button">
        <Button link="/login" fill>
          Login
        </Button>
        <Button link="/daftar">Daftar</Button>
      </div>
    </nav>
  );
};

export default Navbar;
