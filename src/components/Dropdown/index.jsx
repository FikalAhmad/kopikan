import { useContext, useState } from "react";
import profileIcon from "/src/assets/icon/profile-white.png";
import { dropdownContainer } from "./styles";
import { AuthContext } from "../myContext/AuthContext";
import { useNavigate } from "react-router-dom";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleProfile = () => {
    setIsOpen(false);
    navigate("/profile");
  };
  const handleLogout = async () => {
    await logout();
    setIsOpen(false);
  };

  return (
    <div className={dropdownContainer}>
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        <img src={profileIcon} alt="" className="icon" />
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <button className="btn-item" onClick={() => handleProfile()}>
            Profile
          </button>
          <button className="btn-item" onClick={() => handleLogout()}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
