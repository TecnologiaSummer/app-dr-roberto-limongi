import { useContext } from "react";
import { Navigate, Outlet } from  "react-router-dom";
import { AuthContext } from "./Context/AuthContext";

export const PrivateRoute = () => {
  const { signed } = useContext(AuthContext);

  return signed ? <Navigate to="/dashboard" /> : <Navigate to="/" />;
}

