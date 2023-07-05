import { footerContainer } from "./styles";
import Logo from "/src/assets/logo/logo-cup-white.png";

const Footer = () => {
  return (
    <div>
      <div className={footerContainer}>
        <img src={Logo} alt="" className="footer--logo" />
        <div className="footer--description">
          <section className="desc--section">PT. KOPIKAN MAJU MUNDUR</section>
          <p>
            Jl. Jenderal Sudirman No.Kavling 5, RW.6, Karet Tengsin, Kecamatan
            Tanah Abang, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10220
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
