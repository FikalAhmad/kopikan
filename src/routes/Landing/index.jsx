import Footer from "../../components/Footer";
import ImageGallery from "../../components/ImageGallery";
import Navbar from "../../components/Nav";

import ProductCard from "../../components/ProductCard";
import HighlightAbout from "../../components/highlightAbout";

const Landing = () => {
  return (
    <>
      <Navbar />
      <ImageGallery />
      <HighlightAbout />
      <ProductCard />
      <Footer />
    </>
  );
};

export default Landing;
