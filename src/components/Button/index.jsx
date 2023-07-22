import { useNavigate } from "react-router-dom";
import { fillBtn } from "./styles";

const Button = ({ children, icon, link, fill }) => {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      className={fillBtn({ fill })}
      onClick={() => navigate(`${link}`)}
    >
      {icon ? <img src={icon} alt="logo" /> : null}
      {children}
    </button>
  );
};

export default Button;
