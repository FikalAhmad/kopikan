import { useEffect, useState } from "react";
import { productCardContainer } from "./styles";
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
  return (
    <div className={productCardContainer}>
      <div className="section--container">
        <h1>Produk Kami</h1>
        <p>
          <Link to="/produk" className="link">
            Lihat Semua
          </Link>
        </p>
      </div>
      <div className="card--container">
        <div className="card">
          <img src={product[0]?.image} alt="" className="image--card" />
          <div className="testing">
            <div>
              <p className="p--title">{product[0]?.title}</p>
              <p className="p--desc">{product[0]?.desc}</p>
            </div>
          </div>
        </div>
        <div className="card">
          <img src={product[5]?.image} alt="" className="image--card" />
          <div className="testing">
            <div>
              <p className="p--title">{product[5]?.title}</p>
              <p className="p--desc">{product[5]?.desc}</p>
            </div>
          </div>
        </div>
        <div className="card">
          <img src={product[12]?.image} alt="" className="image--card" />
          <div className="testing">
            <div>
              <p className="p--title">{product[12]?.title}</p>
              <p className="p--desc">{product[12]?.desc}</p>
            </div>
          </div>
        </div>
        <div className="card">
          <img src={product[2]?.image} alt="" className="image--card" />
          <div className="testing">
            <div>
              <p className="p--title">{product[2]?.title}</p>
              <p className="p--desc">{product[2]?.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
