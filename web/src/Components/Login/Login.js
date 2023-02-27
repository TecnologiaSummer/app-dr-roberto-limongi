import React, { useContext } from 'react';

import { Link, Navigate } from 'react-router-dom';
import loginImg from '../../Assets/login.jpg';
import Input from '../Forms/Input';
import useForm from '../../Hooks/useForm';
import { AuthContext } from '../../Context/AuthContext';

export default function Login() {
  const { signIn, signed } = useContext(AuthContext);

  const email = useForm('email');
  const password = useForm('password');

  async function handleSignIn(event) {
    event.preventDefault();
    if (email.validate() && password.validate()) {
      await signIn(email, password);
    }
  }

  if (signed) {
    return <Navigate to="/dashboard" />;
  } else {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
        <div className="hidden sm:block">
          <img className="w-full h-full object-cover" src={loginImg} alt="" />
        </div>

        <div className="bg-summer-500 flex flex-col justify-center">
          <form
            action=""
            onSubmit={handleSignIn}
            className="max-w-[400px] w-full mx-auto bg-summer-100 p-8 px-8 rounded-lg"
          >
            <h2 className="text-4xl font-bold text-summer-900 text-center">
              Acessar Conta
            </h2>

            <Input label="Email" type="email" name="email" {...email} />
            <Input
              label="Password"
              type="password"
              name="password"
              {...password}
            />

            <div className="flex justify-between text-summer-900 py-2">
              <p className="flex items-center">
                <input className="mr-2" type="checkbox" /> Lembre-se
              </p>
              <Link className="hover:text-summer-500" to="/perdeu">
                Esqueceu a Senha?
              </Link>
            </div>
            <button className="w-full my-5 py-2 bg-summer-500 text-summer-100 shadow-lg shadow-summer-500/50 hover:shadow-summer-500/40 font-semibold rounded-lg">
              Entrar
            </button>
          </form>
        </div>
      </div>
    );
  }
}
