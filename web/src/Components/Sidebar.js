import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiMenuAlt3 } from 'react-icons/hi';
import { MdOutlineDashboard, MdOutlineLogout } from 'react-icons/md';
import { AiOutlineUser } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';

const Home = () => {
  const { setUser, signed } = useContext(AuthContext);
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    setUser(false)
    navigate('/');
    console.log(signed)
  };

  const menus = [
    { name: 'Inicio', link: '/', icon: MdOutlineDashboard },
    { name: 'Usuarios', link: '/usuarios', icon: AiOutlineUser },
    // { name: "Setting", link: "/", icon: RiSettings4Line },
  ];
  const [open, setOpen] = useState(true);
  return (
    <div
      className={`min-h-screen bg-summer-500 ${
        open ? 'w-72' : 'w-16'
      } duration-500 text-gray-100 px-4`}
    >
      <div className="py-3 flex justify-end">
        <HiMenuAlt3
          size={26}
          className="cursor-pointer"
          onClick={() => setOpen(!open)}
        />
      </div>
      <div className="mt-4 flex flex-col gap-4 relative">
        {menus?.map((menu, i) => (
          <Link
            to={menu?.link}
            key={i}
            className={` ${
              menu?.margin && 'mt-5'
            } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-summer-900 rounded-md`}
            onClick={() => menu?.acao}
          >
            <div>{React.createElement(menu?.icon, { size: '20' })}</div>
            <h2
              style={{
                transitionDelay: `${i + 3}00ms`,
              }}
              className={`whitespace-pre duration-500 ${
                !open && 'opacity-0 translate-x-28 overflow-hidden'
              }`}
            >
              {menu?.name}
            </h2>
            <h2
              className={`${
                open && 'hidden'
              } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
            >
              {menu?.name}
            </h2>
          </Link>
        ))}

        <button
          className={`group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-summer-900 rounded-md`}
          onClick={() => logout()}
        >
          <span>{React.createElement(MdOutlineLogout, { size: '20' })}</span>

          <h2
            className={`whitespace-pre duration-500 ${
              !open && 'opacity-0 translate-x-28 overflow-hidden'
            }`}
          >
            Logout
          </h2>

          <h2
              className={`${
                open && 'hidden'
              } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
            >
              Logout
            </h2>
        </button>
      </div>
    </div>
  );
};

export default Home;
