import { useNavigate } from "react-router-dom";
import { NotFoundContainer } from "./styles";
import Illustration from "/src/assets/content/notfound.png";
import Logo from "/src/assets/logo/logo-cup-white.png";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className={NotFoundContainer}>
      <div className="illustration">
        <img src={Illustration} alt="" className="illustration--gambar" />
      </div>
      <div>
        <button className="btn" onClick={() => navigate("/")}>
          Back to Homepage
        </button>
      </div>
      <div>
        <img src={Logo} alt="" className="logo" />
      </div>
    </div>
  );
};

export default NotFoundPage;
