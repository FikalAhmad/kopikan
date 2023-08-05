import { footerContainer } from "./styles";
import Logo from "/src/assets/logo/logo-cup-white.png";
import IgLogo from "/src/assets/icon/ig-logo.png";
import LinkedinLogo from "/src/assets/icon/linkedin-logo.png";
import MailIcon from "/src/assets/icon/email-icon.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className={footerContainer}>
        <div className="footer--first">
          <div>
            <img src={Logo} alt="" className="footer--logo" />
          </div>
          <div className="footer--description">
            <section className="desc--section">PT. KOPIKAN MAJU MUNDUR</section>
            <p>
              Jl. Jenderal Sudirman No.Kavling 5, RW.6, Karet Tengsin, Kecamatan
              Tanah Abang, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta
              10220
            </p>
          </div>
        </div>
        <br />
        <hr />
        <div className="footer--second">
          <div className="icon">
            <Link
              to="https://www.instagram.com/kalartarchive"
              className="link"
              target="_blank"
            >
              <img src={IgLogo} alt="" />
            </Link>
            <Link
              to="mailto:fikri282haikal@gmail.com"
              className="link"
              target="_blank"
            >
              <img src={MailIcon} alt="" />
            </Link>
            <Link
              to="https://www.linkedin.com/in/ahmadfikrihaikal/"
              className="link"
              target="_blank"
            >
              <img src={LinkedinLogo} alt="" />
            </Link>
          </div>
          <p>© Copyright Tukang Kopikan. All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
