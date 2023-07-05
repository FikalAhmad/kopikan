import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../ProductCard";
import { prevProdukContainer } from "./styles";
import { Link } from "react-router-dom";

const PrevProduk = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/products");
        setProduct(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className={prevProdukContainer}>
      <div className="pp--section">
        <h1>Produk Kami</h1>
        <Link to="/produk" className="link">
          Lihat Semua
        </Link>
      </div>
      <div className="pp--item">
        {/* <ProductCard
          image={product[5].image}
          title={product[5].title}
          price={product[5].price}
        /> */}
      </div>
    </div>
  );
};

export default PrevProduk;
