import { createContext, useState } from "react";

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    
    return (
        <AuthContext.Provider value={{ nome: "Leleco"}}>
            {children}
        </AuthContext.Provider>
    )
}

