import { Navigate } from "react-router-dom";
import Register from "../pages/Register";

function ProtectedRoutes({ children, user }) {
  if (user) {
    return children;
  } else {
    return <Navigate to="/register" />;
  }
}

export default ProtectedRoutes;
