import { Navigate, useLocation } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import LoaderSpinner from "../components/common/LoaderSpinner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) return <LoaderSpinner></LoaderSpinner>;

  return user ? children : <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
