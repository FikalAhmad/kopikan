import { useContext, useEffect, useState } from "react";
import { cartPageContainer } from "./styles";
import Navbar from "../../components/Nav";
import { AuthContext } from "../../components/myContext/AuthContext";
import toRupiah from "@develoka/angka-rupiah-js";

const CartPage = () => {
  const { authenticated } = useContext(AuthContext);
  const [opt, setOpt] = useState([]);
  console.log(typeof opt);

  useEffect(() => {
    setOpt(Object.values(JSON.parse(localStorage.getItem("carts") || "{}")));
  }, [authenticated]);

  const addQty = (id, value) => {
    const option = opt.map((item) => {
      if (id === item.productName) {
        item.qty += value;
      }
      return item;
    });
    setOpt(option);
    localStorage.setItem(
      "carts",
      JSON.stringify(
        option.reduce((acc, curr) => {
          return {
            //spread operator (...)
            ...acc,
            [curr.productName]: {
              ...curr,
            },
          };
        }, {})
      )
    );
  };

  const minQty = (id, value) => {
    const option = opt.map((item) => {
      if (id === item.productName) {
        item.qty -= value;
      }
      return item;
    });
    setOpt(option);
    localStorage.setItem(
      "carts",
      JSON.stringify(
        option.reduce((acc, curr) => {
          return {
            //spread operator (...)
            ...acc,
            [curr.productName]: {
              ...curr,
            },
          };
        }, {})
      )
    );
  };

  return (
    <>
      <Navbar />
      <div className={cartPageContainer}>
        <h1>Cart</h1>
        {opt?.length > 0 ? (
          <>
            <table className="table">
              <tbody className="table table--body">
                {opt.map((item, index) => {
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
                          onClick={() => addQty(item.productName, 1)}
                        >
                          +
                        </button>
                        <span>{item.qty}</span>
                        <button
                          className="btn"
                          onClick={() => minQty(item.productName, 1)}
                        >
                          -
                        </button>
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
    </>
  );
};

export default CartPage;
