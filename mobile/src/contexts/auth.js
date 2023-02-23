import { createContext, useState } from "react";

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({})

    function signIn(email, password) {
        if(email != '' && password != '') {
            setUser({
                email,
                password
            })
        }
    }

    return (
        <AuthContext.Provider value={{ nome: "Leleco"}}>
            {children}
        </AuthContext.Provider>
    )
}

