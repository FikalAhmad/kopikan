import Footer from "../../components/Footer";
import ImageGallery from "../../components/ImageGallery";
import Navbar from "../../components/Nav";
import PrevProduk from "../../components/PrevProduk";
import HighlightAbout from "../../components/highlightAbout";

const Landing = () => {
  return (
    <>
      <Navbar />
      <ImageGallery />
      <HighlightAbout />
      <PrevProduk />
      <Footer />
    </>
  );
};

export default Landing;
