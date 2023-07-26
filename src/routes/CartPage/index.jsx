import { useContext, useEffect, useState } from "react";
import { cartPageContainer } from "./styles";
import Navbar from "../../components/Nav";
import { AuthContext } from "../../components/myContext/AuthContext";
import toRupiah from "@develoka/angka-rupiah-js";

const CartPage = () => {
  const { authenticated } = useContext(AuthContext);
  const [opt, setOpt] = useState({});
  // const [tes, setTes] = useState({});

  useEffect(() => {
    setOpt(JSON.parse(localStorage.getItem("carts")));
    reducer();
  }, [authenticated]);

  const reducer = () =>
    Object.values(opt).map((item) => {
      const tes = [""];
      let i = 0;
      while (i < item.length) {
        tes += item.qty;
        i++;
      }
      console.log(tes);
    });
  return (
    <div className={cartPageContainer}>
      <Navbar />
      <h1>Cart</h1>
      {opt !== null ? (
        // <ul className="item--container">
        //   {Object.values(opt).map((item, index) => {
        //     return (
        //       <li key={index} className="item--li">
        //         <p>{item.productName}</p>
        //         <p>{item.qty}</p>
        //         <p>{item.price}</p>
        //       </li>
        //     );
        //   })}
        //   <li>Total : </li>
        // </ul>
        <>
          <table className="table">
            <tbody className="table table--body">
              {Object.values(opt).map((item, index) => {
                return (
                  <tr key={index} className="table table--row">
                    <td className="table table--data">
                      <img src={item.image} alt="" className="table__image" />
                    </td>
                    <td className="table table--data table__productname">
                      {item.productName}
                    </td>
                    <td className="table table--data">
                      <button
                        className="btn"
                        // onClick={() =>
                        //   localStorage.setItem("carts", item.qty + 1)
                        // }
                      >
                        +
                      </button>
                      <span>{item.qty}</span>
                      <button className="btn">-</button>
                    </td>
                    <td className="table table--data">
                      {toRupiah(item.price)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div>Total</div>
        </>
      ) : (
        <p>Cart Kosong</p>
      )}
    </div>
  );
};

export default CartPage;
