import { CardContainer } from "./styles";
import plus from "/src/assets/icon/plus-white.png";
import toRupiah from "@develoka/angka-rupiah-js";

const CardProduct = ({ image, title, desc, price }) => {
  return (
    <div className={CardContainer}>
      <img src={image} alt="" className="image--card" />
      <div className="testing">
        <p className="p--title">{title}</p>
        <p className="desc">{desc}</p>
        <div className="testing2">
          <p className="p--price">{toRupiah(price)}</p>
          <button className="plus">
            <img src={plus} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
