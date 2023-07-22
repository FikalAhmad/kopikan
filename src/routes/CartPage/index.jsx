import { useEffect, useState } from "react";
import { cartPageContainer } from "./styles";
import Navbar from "../../components/Nav";

const CartPage = () => {
  const [opt, setOpt] = useState([]);
  useEffect(() => {
    // const carts = localStorage.getItem("carts");
    setOpt(localStorage.getItem("carts"));
  }, []);
  console.log(opt[0].productName);
  return (
    <div className={cartPageContainer}>
      <Navbar />
      <h2>Cart</h2>
      {opt === null ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {opt.map((item, index) => (
            <li key={index}>{item.productName}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;
