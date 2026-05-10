import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { isAuth, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>; // Or a spinner
  }

  return isAuth ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;