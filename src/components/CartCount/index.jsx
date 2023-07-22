import { Link } from "react-router-dom";
import { CartCountContainer } from "./styles";
import cartIcon from "/src/assets/icon/cart-white.png";

const CartCount = ({ totalItems }) => {
  return (
    <div className={CartCountContainer}>
      <button className="icon--btn icon__btn">
        <Link to="/cart" className="link--btn">
          <img src={cartIcon} alt="" className="icon" />
          {totalItems > 0 && <span className="badge">{totalItems}</span>}
        </Link>
      </button>
    </div>
  );
};

export default CartCount;
