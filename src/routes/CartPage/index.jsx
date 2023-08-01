import { useEffect, useMemo, useState } from "react";
import { cartPageContainer } from "./styles";
import Navbar from "../../components/Nav";
import toRupiah from "@develoka/angka-rupiah-js";
import Button from "../../components/Button";

const CartPage = () => {
  const [opt, setOpt] = useState([]);

  useEffect(() => {
    setOpt(Object.values(JSON.parse(localStorage.getItem("carts") || "{}")));
  }, []);

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

  const totalBill = useMemo(() => {
    return opt.reduce(
      (acc, curr) => {
        return {
          qty: acc.qty + curr.qty,
          price: acc.price + curr.price * curr.qty,
        };
      },
      { qty: 0, price: 0 }
    );
  }, [opt]);

  return (
    <>
      <Navbar />
      <div className={cartPageContainer}>
        <h1>Cart</h1>

        {opt?.length > 0 ? (
          <div className="bill">
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
                          onClick={() => minQty(item.productName, 1)}
                        >
                          -
                        </button>
                        <span className="qty">{item.qty}</span>
                        <button
                          className="btn"
                          onClick={() => addQty(item.productName, 1)}
                        >
                          +
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
            <div className="total--bill">
              <div className="item--total-bill">
                Total Qty :<span className="item--bill">{totalBill.qty}</span>
              </div>
              <div className="item--total-bill">
                Total Price :
                <span className="item--bill">{toRupiah(totalBill.price)}</span>
              </div>
              <div className="bill--btn">
                <Button fill>Proceed to Checkout</Button>
              </div>
            </div>
          </div>
        ) : (
          <p className="cart--empty">Your Cart is Empty :(</p>
        )}
      </div>
    </>
  );
};

export default CartPage;
