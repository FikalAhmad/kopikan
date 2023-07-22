import Navbar from "../../components/Nav";
import ImageGallery from "../../components/ImageGallery";
import HighlightAbout from "../../components/highlightAbout";
import ProductCard from "../../components/ProductCard";
import Footer from "../../components/Footer";
const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <ImageGallery />
      <HighlightAbout />
      <ProductCard />
      <Footer />
    </div>
  );
};

export default Dashboard;
