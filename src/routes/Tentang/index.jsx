import Navbar from "../../components/Nav";
import { tentangContainer } from "./styles";

const Tentang = () => {
  return (
    <div>
      <Navbar />
      <div className={tentangContainer}>
        <div className="tentang--image"></div>
        <div>
          <h1 className="tentang--h1">Tentang Kami</h1>
          <p>
            Kopikan adalah sebuah startup kopi yang berfokus pada menyediakan
            pengalaman kopi unik dan inovatif kepada pelanggan. Mereka
            menciptakan atmosfer yang nyaman dan ramah bagi para pecinta kopi
            untuk menikmati berbagai jenis kopi yang berkualitas tinggi. Kopikan
            memiliki konsep modern dan menarik, dengan desain interior yang
            estetis dan menyediakan layanan yang cepat dan efisien.
          </p>
          <hr />
          <h1>Visi dan Misi KOPIKAN</h1>
          <h2>Visi</h2>
          <p>
            Menjadi perusahaan yang terkemuka dalam industri F&B dengan fokus
            pada kopi dan kedai kopi, menciptakan pengalaman yang tak terlupakan
            bagi pelanggan kami. Kami bertujuan untuk menjadi merek yang diakui
            secara internasional dan dipercaya dalam hal kualitas kopi, layanan
            pelanggan yang superior, dan atmosfer yang unik di setiap gerai
            KOPIKAN.
          </p>
          <h2>Misi</h2>
          <ol>
            <li>
              Memberikan kualitas kopi terbaik: Kami berkomitmen untuk
              menyajikan kopi terbaik dengan menggunakan biji kopi berkualitas
              tinggi dari sumber yang terpercaya. Kami menjaga standar ketat
              dalam proses pemanggangan dan pemilihan biji kopi untuk memberikan
              rasa yang konsisten dan memuaskan bagi pelanggan kami.
            </li>
            <li>
              Menyajikan menu yang inovatif: Kami terus mengembangkan menu yang
              inovatif dengan memperkenalkan minuman kopi yang unik dan variasi
              makanan penemuan terbaru. Kami berusaha untuk memenuhi berbagai
              preferensi pelanggan kami dan memberikan pengalaman kuliner yang
              menarik di setiap kunjungan.
            </li>
            <li>
              Memberikan pelayanan pelanggan yang superior: Pelanggan adalah
              aset berharga bagi kami. Kami berkomitmen untuk memberikan
              pelayanan pelanggan yang ramah, responsif, dan profesional. Kami
              mengajarkan karyawan kami tentang pentingnya menjaga hubungan yang
              baik dengan pelanggan, mendengarkan umpan balik mereka, dan
              memberikan solusi yang memuaskan.
            </li>
            <li>
              Menciptakan atmosfer yang nyaman: Kami mengerti bahwa lingkungan
              yang nyaman dan santai adalah faktor penting dalam pengalaman
              pengunjung. Kami merancang kedai-kedai KOPIKAN dengan desain
              interior yang menarik, suasana yang hangat, dan fasilitas yang
              memadai untuk membuat pelanggan merasa betah dan kembali lagi.
            </li>
            <li>
              Berkelanjutan dan bertanggung jawab: Kami bertujuan untuk
              menjalankan bisnis dengan cara yang bertanggung jawab secara
              sosial dan lingkungan. Kami berkomitmen untuk mendukung praktik
              bisnis yang berkelanjutan, termasuk mendukung petani kopi lokal,
              menggunakan bahan-bahan yang ramah lingkungan, dan mengurangi
              dampak jejak karbon kami.
            </li>
          </ol>
          <p>
            Dengan visi dan misi ini, kami berharap dapat menciptakan merek
            KOPIKAN yang dikenal luas dan menjadi tempat tujuan bagi para
            pecinta kopi, serta memberikan kontribusi positif bagi komunitas
            lokal dan industri F&B secara keseluruhan.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tentang;
