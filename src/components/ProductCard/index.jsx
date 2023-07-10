import { useEffect, useState } from "react";
import { productCardContainer } from "./styles";
import toRupiah from "@develoka/angka-rupiah-js";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductCard = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/products");
        setProduct(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  console.log(product[5]);
  return (
    <div className={productCardContainer}>
      <div className="pp--section">
        <h1>Produk Kami</h1>
        <Link to="/produk" className="link">
          Lihat Semua
        </Link>
        <img src={product[5]?.image} alt="" />
      </div>
    </div>
  );
};

export default ProductCard;
