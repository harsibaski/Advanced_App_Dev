import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  HouseDoor,
  Envelope,
  PersonCircle,
  Calendar2Check,
  Book,
  People,
  BoxArrowUpRight,
} from 'react-bootstrap-icons'; // Importing Bootstrap icons
import Logo from '/Users/arunvs/Advanced_App_dev/ui_react/vite-project/public/vite.svg'; // Importing the logo SVG

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    {
      name: 'Home',
      path: '/user',
      icon: <HouseDoor size={20} />,
    },
    {
      name: 'Events',
      path: '/events',
      icon: <Calendar2Check size={20} />,
    },
    {
      name: 'Courses',
      path: '/courses',
      icon: <Book size={20} />,
    },
    {
      name: 'Login',
      path: '/login',
      icon: <PersonCircle size={20} />,
    },
    {
      name: 'Sign Up',
      path: '/register',
      icon: <BoxArrowUpRight size={20} />,
    },
  ];

  return (
    <nav className="bg-white rounded-3xl shadow-xl mb-4">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <NavLink to="/" className="text-sm flex items-center space-x-2">
          <img src={Logo} alt="Logo" className="w-8 h-8" />
          <span className="text-transparent bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text font-extrabold text-4xl">MatriX</span>
        </NavLink>
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-white"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            )}
          </svg>
        </button>
        <div className={`md:flex items-center space-x-4 ${isOpen ? 'block' : 'hidden'}`}>
          {links.map((link, index) =>
            <NavLink
              key={index}
              to={link.path}
              activeClassName="shadow-md font-bold"
              className="text-orange-500 flex items-center px-3 py-2 rounded-md transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105 hover:text-white hover:bg-gradient-to-r from-orange-400 to-orange-600"
            >
              {link.icon}
              <span className="ml-2 text-sm">{link.name}</span>
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
