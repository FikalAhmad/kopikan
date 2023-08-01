import { TabsContainer } from "./styles";
import { NavLink } from "react-router-dom";

const Tabs = () => {
  return (
    <div>
      <div className={TabsContainer}>
        <NavLink
          to="/cart"
          className="tab--item-styles"
          activeClassname="active"
        >
          Cart
        </NavLink>
        <NavLink
          to="/order"
          className="tab--item-styles"
          activeClassname="active"
        >
          Order Here
        </NavLink>
      </div>
    </div>
  );
};

export default Tabs;
