import { HAContainer } from "./styles";
import ContentAbout from "/src/assets/content/content-about.png";
import Button from "../Button";

const HighlightAbout = () => {
  return (
    <div className={HAContainer}>
      <img src={ContentAbout} alt="" />
      <div className="description">
        <h1>Tentang Kami</h1>
        <p>
          Kopikan adalah sebuah startup kopi yang berfokus pada menyediakan
          pengalaman kopi unik dan inovatif kepada pelanggan. Mereka menciptakan
          atmosfer yang nyaman dan ramah bagi para pecinta kopi untuk menikmati
          berbagai jenis kopi yang berkualitas tinggi. Kopikan memiliki konsep
          modern dan menarik, dengan desain interior yang estetis dan
          menyediakan layanan yang cepat dan efisien.
        </p>
        <div className="button--more">
          <Button link="/tentang">Baca Selengkapnya</Button>
        </div>
      </div>
    </div>
  );
};

export default HighlightAbout;
