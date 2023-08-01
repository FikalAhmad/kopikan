// import axios from "axios";
import { useContext } from "react";
import Navbar from "../../components/Nav";
import { ProfileContainer } from "./styles";
import { AuthContext } from "../../components/myContext/AuthContext";

const Profile = () => {
  const { name } = useContext(AuthContext);
  // const response = axios.post("http://localhost:5000/", {

  // })

  return (
    <>
      <Navbar />
      <div className={ProfileContainer}>
        <h1>Profile</h1>
        <div>Name: {name}</div>
      </div>
    </>
  );
};

export default Profile;
