import { createContext, useState,useEffect } from "react";
import { api } from "../Services/api";

export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadingStoreData = async () => {
      const storageToken = localStorage.getItem("@Auth:token");
  
      if(storageToken){
        setUser(storageToken);
      }
    };

    loadingStoreData();
  }, [])

  const signIn = async (email, password) => {
    const response = await api.post("/auth", {
      cd_email: email.value,
      password: password.value,
    });

    if(response.data.error){
      alert(response.data.error);
    }else{
      setUser(response.data);
      api.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.token}`;
      localStorage.setItem("@Auth:token", response.data.token);
    }
  }

  return (
    <AuthContext.Provider value={{
      user,
      signed: !!user,
      signIn
    }}>
      {children}
    </AuthContext.Provider>
  )
}