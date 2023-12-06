import axios from "axios";
import { useState } from "react";
import Navbar from "../../components/Nav";
import { ProfileContainer } from "./styles";
import { useNavigate } from "react-router-dom";
import useAppContext from "../../components/myContext/useAppContext";

const Profile = () => {
  const { idUser, name } = useAppContext();
  const [newName, setNewName] = useState("");
  const navigate = useNavigate();

  const SaveChanges = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`${import.meta.env.VITE_API_URL}/users/${idUser}`, {
        name: newName,
      });
      navigate("/order");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className={ProfileContainer}>
        <h1>Profile</h1>
        <div className="profile--wrap">
          <div className="side--left">
            <p className="p--title">Account name</p>
            <p className="p--desc">This will be displayed on your profile.</p>
          </div>
          <div className="side--right">
            <form onSubmit={SaveChanges} className="form">
              <input
                type="text"
                className="input--text"
                placeholder={name}
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
              />
              <div className="btn--wrap">
                <button type="submit" className="submit--btn">
                  Save Changes
                </button>
                <button
                  onClick={() => setNewName()}
                  className="submit--btn_stroke"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
