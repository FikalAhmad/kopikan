import Navbar from "../../components/Nav";
import { tentangContainer } from "./styles";

const Tentang = () => {
  return (
    <div>
      <Navbar />
      <div className={tentangContainer}>
        <div className="tentang--image"></div>
        <div>
          <h1>Tentang Kami</h1>
          <p>
            Kopikan adalah sebuah startup kopi yang berfokus pada menyediakan
            pengalaman kopi unik dan inovatif kepada pelanggan. Mereka
            menciptakan atmosfer yang nyaman dan ramah bagi para pecinta kopi
            untuk menikmati berbagai jenis kopi yang berkualitas tinggi. Kopikan
            memiliki konsep modern dan menarik, dengan desain interior yang
            estetis dan menyediakan layanan yang cepat dan efisien.
          </p>
          <section>Visi dan Misi KOPIKAN</section>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum sed
            cum, hic non a dolorum, minus quos voluptatem mollitia consectetur
            nihil reprehenderit aspernatur recusandae odit dolorem ab, vero
            nesciunt ex!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tentang;
