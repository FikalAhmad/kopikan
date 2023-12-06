import { useEffect, useState } from "react";
import { productContainer } from "./styles";
import axios from "axios";
import Navbar from "../../components/Nav";
import Footer from "../../components/Footer";

const Product = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/products`
        );
        setProduct(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  //function for filter
  const filterSignature = (product) => {
    return product.category === "Signature";
  };
  const filterCoffee = (product) => {
    return product.category === "Coffee";
  };
  const filterNonCoffee = (product) => {
    return product.category === "Non-Coffee";
  };

  return (
    <>
      <Navbar />
      <div className={productContainer}>
        <div>
          <h1>Semua Produk</h1>
          <h2 className="h2">Signature</h2>
          <div className="card">
            {product.filter(filterSignature).map((item) => {
              return (
                <div className="card--container" key={item.id}>
                  <img src={item.image} alt="" className="image--card" />
                  <div className="testing">
                    <p className="p--title">{item.title}</p>
                    <p className="desc">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <h2>Coffee</h2>
          <div className="card">
            {product.filter(filterCoffee).map((item) => {
              return (
                <div className="card--container" key={item.id}>
                  <img src={item.image} alt="" className="image--card" />
                  <div className="testing">
                    <p className="p--title">{item.title}</p>
                    <p className="desc">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <h2>Non Coffee</h2>
          <div className="card">
            {product.filter(filterNonCoffee).map((item) => {
              return (
                <div className="card--container" key={item.id}>
                  <img src={item.image} alt="" className="image--card" />
                  <div className="testing">
                    <p className="p--title">{item.title}</p>
                    <p className="desc">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
