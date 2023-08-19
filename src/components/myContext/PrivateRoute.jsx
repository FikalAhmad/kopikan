import { Navigate } from "react-router-dom";
import useAppContext from "./useAppContext";

const PrivateRoute = ({ component: Component }) => {
  const { authenticated } = useAppContext();

  return authenticated ? <Component /> : <Navigate to="/login" />;
};

export default PrivateRoute;
