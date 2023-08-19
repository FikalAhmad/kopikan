import { useState } from "react";
import profileIcon from "/src/assets/icon/profile-white.png";
import { dropdownContainer } from "./styles";
import { useNavigate } from "react-router-dom";
import useAppContext from "../myContext/useAppContext";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { logout } = useAppContext();
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
