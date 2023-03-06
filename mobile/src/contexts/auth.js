import { createContext, useState, useContext } from "react";

import { api } from "../services/api";

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    const [userToken, setUserToken] = useState({})

    const fetchToken = async (email, password) => {
        try {
          const response = await api.post('/auth', {
            cd_email: email,
            password: password
          })
          setUserToken(response.data)
          
          return userToken
        } catch(e) {
          console.warn('Error: ' + e)
        }
    }

    return (
        <AuthContext.Provider value={{userToken, fetchToken, setUserToken}}>
          {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)
    return context
}

export default AuthContext;

