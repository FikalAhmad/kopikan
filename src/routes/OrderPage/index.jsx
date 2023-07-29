import { useContext, useEffect, useState } from "react";
import { OrderPageContainer } from "./styles";
import toRupiah from "@develoka/angka-rupiah-js";
import plus from "/src/assets/icon/plus-white.png";
import axios from "axios";
import Navbar from "../../components/Nav";
import { AuthContext } from "../../components/myContext/AuthContext";

const OrderPage = () => {
  const [product, setProduct] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const { name } = useContext(AuthContext);
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

  const addToCart = (image, productName, qty, price) => {
    setCartItems((prevItems) => {
      const quantity = !prevItems[productName]?.qty
        ? 1
        : prevItems[productName].qty + 1;
      const newItem = {
        ...prevItems,
        [productName]: {
          image,
          productName,
          qty: quantity,
          price: price * quantity,
        },
      };
      localStorage.setItem("carts", JSON.stringify(newItem));
      return newItem;
    });
  };
  return (
    <>
      <Navbar />
      <div className={OrderPageContainer}>
        <div>
          <h1>
            Welcome <span>{name}!</span>
          </h1>
          <h2 className="h2">Signature</h2>
          <div className="card">
            {product.filter(filterSignature).map((item) => {
              return (
                <div className="card--container" key={item.id}>
                  <img src={item.image} alt="" className="image--card" />
                  <div className="wrap--text">
                    <p className="p--title">{item.title}</p>
                    <p className="desc">{item.desc}</p>
                    <div className="wrap--btn">
                      <p className="p--price">{toRupiah(item.price)}</p>
                      <button
                        className="plus"
                        onClick={() =>
                          addToCart(item.image, item.title, 1, item.price)
                        }
                      >
                        <img src={plus} alt="" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <h2>Coffee</h2>
          <div className="card">
            {product.filter(filterCoffee).map((produk) => {
              return (
                <div className="card--container" key={produk.id}>
                  <img src={produk.image} alt="" className="image--card" />
                  <div className="wrap--text">
                    <p className="p--title">{produk.title}</p>
                    <p className="desc">{produk.desc}</p>
                    <div className="wrap--btn">
                      <p className="p--price">{toRupiah(produk.price)}</p>
                      <button className="plus">
                        <img src={plus} alt="" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <h2>Non Coffee</h2>
          <div className="card">
            {product.filter(filterNonCoffee).map((produk) => {
              return (
                <div className="card--container" key={produk.id}>
                  <img src={produk.image} alt="" className="image--card" />
                  <div className="wrap--text">
                    <p className="p--title">{produk.title}</p>
                    <p className="desc">{produk.desc}</p>
                    <div className="wrap--btn">
                      <p className="p--price">{toRupiah(produk.price)}</p>
                      <button className="plus">
                        <img src={plus} alt="" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderPage;
