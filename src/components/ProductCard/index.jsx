import { productCardContainer } from "./styles";
import toRupiah from "@develoka/angka-rupiah-js";

const ProductCard = ({ image, title, price }) => {
  return (
    <div className={productCardContainer}>
      <img src={image} alt="" className="image--card" />
      <div className="testing">
        <div>
          <p className="p--title">{title}</p>
          <p className="p--price">{toRupiah(price)}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
