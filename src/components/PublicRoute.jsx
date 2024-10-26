import { useAuth } from "../contexts/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const { currentUser } = useAuth();
  return currentUser ? <Navigate to="/"> </Navigate> : <Outlet />;
};

export default PrivateRoute;
