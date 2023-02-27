import React from 'react';
import Table from '../Content/Table';
import Sidebar from '../Sidebar';
import UsersHelper from '../../Helper/UsersHelper';
import { Link } from 'react-router-dom';

const Usuarios = () => {
  
  console.log(UsersHelper());
  return (
    <>
      <div className="meu-grid">
        <Sidebar />
        {/* <Header /> */}
        <div className="relative overflow-x-auto m-5 h-fit main">
          <div className="block md:flex  justify-between align-middle">
            <h1 className="text-3xl mb-3 font-bold leading-tight text-summer-900">
              Usuários
            </h1>
            <Link className="font-semibold mb-3 text-white px-4 py-2 rounded-lg bg-summer-500 hover:bg-summer-900 transition-all">
              Adicionar Usuário
            </Link>
          </div>
          <Table
            data={UsersHelper()}
            columnName={['Imagem', 'Nome', 'Email', 'Status']}
          />
        </div>
      </div>
    </>
  );
};

export default Usuarios;
