import { useEffect, useState } from "react";
import { productContainer } from "./styles";
import axios from "axios";
import Navbar from "../../components/Nav";
import CardProduct from "../../components/CardProduct";

const Product = () => {
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
    <>
      <Navbar />
      <div className={productContainer}>
        <div>
          <h1>Semua Produk</h1>
          <div className="card">
            {product.map((produk) => {
              return (
                <CardProduct
                  key={produk.id}
                  image={produk.image}
                  title={produk.title}
                  desc={produk.desc}
                  price={produk.price}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
