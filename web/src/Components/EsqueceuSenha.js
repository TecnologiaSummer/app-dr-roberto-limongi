/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import loginImg from '../Assets/login.jpg';
import { TabTitle } from '../utils/GeneralFunctions';
import { Link } from "react-router-dom";

export default function EsqueceuSenha() {
  TabTitle('Dashboard | Esqueceu a Senha');
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block">
        <img className="w-full h-full object-cover" src={loginImg} alt="" />
      </div>

      <div className="bg-summer-500 flex flex-col justify-center">
        <form className="max-w-[400px] w-full mx-auto bg-summer-100 p-8 px-8 rounded-lg" method="post">
          <h2 className="text-4xl font-bold text-summer-900 text-center">
          Recuperar Senha
          </h2>
          <div className="flex flex-col text-gray-400 py-2">
            <label>Email</label>
            <input
              className="rounded-lg bg-white mt-2 p-2 focus:border-summer-500 focus:outline-none"
              type="email"
              required
            />
          </div>
          <button className="w-full my-5 py-2 bg-summer-500 text-summer-100 shadow-lg shadow-summer-500/50 hover:shadow-summer-500/40 font-semibold rounded-lg">
            RECUPERAR
          </button>
          <div className="flex justify-center text-summer-900 py-2">
            <Link className="hover:text-summer-500" to="/">Acessar Conta</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
