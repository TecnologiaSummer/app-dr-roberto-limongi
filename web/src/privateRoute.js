import { useContext } from "react";
import { useNavigate } from  "react-router-dom";
import { AuthContext } from "./Context/AuthContext";

export const PrivateRoute = ({children}) => {
  const { signed, setUser } = useContext(AuthContext);
  const  navigate  = useNavigate()
  function handleLogout () {
    setUser(false)
    navigate("/")
  }
  return (
    signed ? children : handleLogout()
  )
}

