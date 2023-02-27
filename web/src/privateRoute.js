import { useContext, useEffect } from "react";
import { useNavigate } from  "react-router-dom";
import { AuthContext } from "./Context/AuthContext";

export const PrivateRoute = ({children}) => {
  const { signed } = useContext(AuthContext);
  const  navigate  = useNavigate()
  return (
    signed ? children : navigate("/")
  )
}

