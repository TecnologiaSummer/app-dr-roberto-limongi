import React from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from "../UserContext";

export default function Header() {

  const { data , userLogout  } = React.useContext(UserContext);

  return (
    <>
      {data ? 
        (<header className="w-full md:flex header">
        <nav
          className="
         flex flex-wrap
         items-center
         justify-between
         w-full
         py-4
         md:py-0
         px-4
         text-lg text-gray-700
         bg-white
         shadow-lg
       "
        >
          <div>
            <a href="">LOGO SVG</a>
          </div>

          <div className="md:flex md:items-center md:w-auto" id="menu">
            <ul
              className="
             pt-4
             text-base text-gray-700
             md:flex
             md:justify-between 
             md:pt-0"
            >
              <li>
                <button
                  className='md:p-4 py-2 block text-summer-500 hover:text-summer-900 transition text-lg font-bold'
                  onClick={userLogout}
                >
                  Sair
                </button>
              </li>
            </ul>
          </div>
        </nav>
        </header>): (<></>)
      }
    </>
  );
}
