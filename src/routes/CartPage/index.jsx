import { useEffect, useMemo, useState } from "react";
import { cartPageContainer } from "./styles";
import Navbar from "../../components/Nav";
import toRupiah from "@develoka/angka-rupiah-js";
import Toaster from "../../components/Toaster";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const [opt, setOpt] = useState([]);
  const [showToaster, setShowToaster] = useState(false);
  const navigate = useNavigate();

  // saat fungsi ini dipanggil dia akan set toasternya jadi true (muncul toasternya) maka akan keluar dengan waktu yg ditentukan set timeoutnya yaitu 2000 danjuga akan menavigate ke /order dan menghapus key carts di local storage
  const handlePurchaseCompleted = () => {
    setShowToaster(true);
    localStorage.removeItem("carts");
    setTimeout(() => {
      navigate("/order");
    }, 2000);
  };

  //saat fungsi ini dipanggil dia akan mengset toaster menjadi false (simbol x ditekan akan hilang langsung toasternya)
  const handleCloseToaster = () => {
    setShowToaster(false);
  };

  // ketika render pertama kali dia akan mengambil item carts di local storage lalu di parse menjadi json object dan juga di object values agar menjadi array kemudian dimasukkan kedalam usestate opt dan jika dia kosong maka akan mengerjakan atau memberikan string obj kosong (kenapa di kodenya pake string? kenapa gapake object kosong langsung? karena dikasus ini kita memparse local storage kita sehingga kita menggunakan string juga dalam obj kosong ini)
  useEffect(() => {
    setOpt(Object.values(JSON.parse(localStorage.getItem("carts") || "{}")));
  }, []);

  // di fungsi addQty ini kita memberikan parameter sehingga mendapatkan data id(berisi ite,.productname) dan value(angka 1 atau lebih).
  const addQty = (id, value) => {
    // membuat variabel option lalu value dari opt di loop menggunakan .map() dengan menghasilkan array baru bernama item lalu akan dicek jika parameter id tadi sama dengan item.productName
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
        // item.qty -= value;
        item.qty <= 0 ? 0 : (item.qty -= value);
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
                <button className="pay-btn" onClick={handlePurchaseCompleted}>
                  Complete Purchase
                </button>
                <Toaster
                  message="Purchase has completed!"
                  show={showToaster}
                  onClose={handleCloseToaster}
                />
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
