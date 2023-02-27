import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from "./Context/AuthContext";
import Login from './Components/Login/Login';
import Home from './Components/Home';
import Usuarios from './Components/Usuarios/Usuarios';
import {PrivateRoute} from './privateRoute';

export default function Router() {
  return (
    <BrowserRouter>
         <AuthProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            
              <Route path="/dashboard/" element={<PrivateRoute><Home /></PrivateRoute>} />
              <Route path="/usuarios/" element={<PrivateRoute><Usuarios /></PrivateRoute>} />
            
          </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
