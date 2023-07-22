import { useEffect, useState } from "react";
import { productContainer } from "./styles";
import toRupiah from "@develoka/angka-rupiah-js";
import plus from "/src/assets/icon/plus-white.png";
import axios from "axios";
import Navbar from "../../components/Nav";

const Product = () => {
  const [product, setProduct] = useState([]);
  const [cartItems, setCartItems] = useState({});
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

  const addToCart = (productName, qty, price) => {
    // const indexItem = cartItems.findIndex(
    //   (data) => data.productName === productName
    // ); // memeriksa apakah item name sudah ada atau belum pada cartList
    setCartItems((prevItems) => {
      const quantity = !prevItems[productName]?.qty
        ? 1
        : prevItems[productName].qty + 1;
      const newItem = {
        ...prevItems,
        [productName]: {
          productName,
          qty: quantity,
          price: price * quantity,
        },
      };
      localStorage.setItem("carts", JSON.stringify(newItem));
      return newItem;
    });
    console.log(cartItems);
    // if (indexItem > -1) {
    //   cartItems[indexItem].qty += 1;
    // setCartItems((prevItems) => [...prevItems, { productName, qty }]);
    // } else if (cartItems == 0) {
    //   setCartItems((prevItems) => [...prevItems, { productName, qty }]);
    // } else {
    //   setCartItems((prevItems) => [...prevItems, { productName, qty }]);
    // }
  };
  // console.log(cartItems);
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
    </>
  );
};

export default Product;
