import { Navigate, useLocation } from "react-router";
import LoadingSpinner from "../components/common/LoadingSpinner";

const PrivateRoute = ({ children }) => {
  // const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) return <LoadingSpinner></LoadingSpinner>;

  return user ? children : <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
