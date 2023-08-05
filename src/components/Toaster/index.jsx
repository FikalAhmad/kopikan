import { useEffect, useState } from "react";
import { ToasterContainer } from "./styles";

const Toaster = ({ message, show, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(show);

    // Auto-hide the toaster after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [show, onClose]);

  const handleClose = () => {
    setIsVisible(false);
    onClose();
  };

  return isVisible ? (
    <div className={ToasterContainer}>
      <div className="toaster-message">{message}</div>
      <button className="toaster-close" onClick={handleClose}>
        &times;
      </button>
    </div>
  ) : null;
};

export default Toaster;
