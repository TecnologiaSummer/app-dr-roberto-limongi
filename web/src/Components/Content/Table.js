import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../../Assets/avatar.png';

const Table = ({ columnName, data }) => {
  return (
      <table className="w-full text-sm text-left text-gray-900 rounded-lg mt-5">
        <thead className="text-xs uppercase">
          <tr>
            {columnName.map(function (item, index) {
              return (
                <th
                  scope="col"
                  key={index}
                  className="bg-summer-500 text-white px-6 py-3"
                >
                  {item}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            console.log(item)
            return (
              <>
                <tr className="bg-white border-b">
                  <th
                    scope="row"
                    className="px-6 py-3 font-medium whitespace-nowrap"
                  >
                    <img
                      className="w-10 h-10"
                      src={item.imagem ? item.imagem : avatar}
                      alt=""
                    />
                  </th>

                  <td className="px-6 py-3">{item.nm_usuario}</td>

                  <td className="px-6 py-3">{item.cd_email}</td>

                  <td className="px-6 py-3">
                    <span
                      className={` rounded-full px-3 py-1 font-semibold leading-tight ${
                        item.ic_status === true
                          ? 'bg-green-200 text-green-900 '
                          : 'bg-red-200 text-red-900'
                      }`}
                    >
                      {item.ic_status === true ? 'Ativo' : 'Inativo'}
                    </span>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
  );
};

export default Table;
