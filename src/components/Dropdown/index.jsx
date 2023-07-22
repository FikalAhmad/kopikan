import React, { useContext, useState } from "react";
import profileIcon from "/src/assets/icon/profile-white.png";
import { dropdownContainer } from "./styles";
import { AuthContext } from "../myContext/AuthContext";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { logout } = useContext(AuthContext);

  // const options = [
  //   { label: "Profile", action: LogoutUser },
  //   { label: "Settings" },
  //   { label: "Logout" },
  // ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleProfile = () => {
    setIsOpen(false);
  };
  const handleSettings = () => {
    setIsOpen(false);
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
          <button className="btn-item" onClick={() => handleSettings()}>
            Settings
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
