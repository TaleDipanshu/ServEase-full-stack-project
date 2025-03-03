import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="flex justify-between items-center p-5 shadow-md bg-white">
       
        <div className="text-3xl font-bold text-green-900">
          <Link to="/">ServEase</Link>
        </div>

       
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none"
          >
          
            <svg
              className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>

           
            <svg
              className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        
        <div className="hidden md:flex space-x-5">
          <Link to="/providers" className="text-lg text-gray-700 pt-1 font-bold hover:underline">
            Services
          </Link>
          <Link
            to="/login"
            className="text-lg text-gray-700 hover:underline font-bold pt-1"
          >
            Sign up / Log in
          </Link>
          <Link
            to="/tasker"
            className="px-4 py-2 bg-transparent border-2 border-green-700 rounded-lg text-green-700 hover:bg-green-700 hover:text-white"
          >
            Become a Tasker
          </Link>
        </div>
      </nav>

      
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white shadow-md p-4`}>
        <Link
          to="/providers"
          className="block py-2 text-lg font-bold text-gray-700 hover:underline"
        >
          Services
        </Link>
        <hr className="border-t border-gray-300" />
        <Link
          to="/login"
          className="block py-2 text-lg text-gray-700 hover:underline font-bold"
        >
          Sign up / Log in
        </Link>
        <hr className="border-t border-gray-300" />
        <Link
          to="/tasker"
          className="block py-2 pl-2 text-lg my-3 w-[cover] text-green-700 border-2 border-green-700 rounded-lg hover:bg-green-700 hover:text-white"
        >
          Become a Tasker
        </Link>
       
      </div>

      <hr className="border-t border-gray-300 shadow-lg" />
    </>
  );
};

export default Header;
