'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-slate-700 to-slate-800 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-2 transition-all duration-300 ease-in-out">
        <img src="logo.png" alt="Logo" className="h-8" />
        <div className="hidden md:flex justify-end items-center space-x-4">
          <a href="#" className="text-white hover:text-lime-400 px-3 py-2 rounded-md font-medium">Home</a>
          <a href="#" className="text-white hover:text-lime-400 px-3 py-2 rounded-md font-medium">Auctioning</a>
          <a href="/register" className="text-white hover:text-lime-400 px-3 py-2 rounded-md font-medium">Registration</a>
          <a href="#" className="text-white hover:text-lime-400 px-3 py-2 rounded-md font-medium">Login</a>
          <a href="#" className="text-white hover:text-lime-400 px-3 py-2 rounded-md font-medium">Contact Us</a>
        </div>
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none focus:ring focus:border-blue-300"
        >
          {isMenuOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>
      <ul className={`md:hidden static bg-gradient-to-r from-slate-700 to-slate-800  w-full transition-all duration-300 ease-in-out ${isMenuOpen ? 'block' : 'hidden'} py-2 space-y-2`}>
        <li className="text-white hover:text-yellow-300 px-3 py-2 font-medium">
          <a href="#">Home</a>
        </li>
        <li className="text-white hover:text-yellow-300 px-3 py-2 font-medium">
          <a href="#">Auctioning</a>
        </li>
        <li className="text-white hover:text-yellow-300 px-3 py-2 font-medium">
          <a href="#">Registration</a>
        </li>
        <li className="text-white hover:text-yellow-300 px-3 py-2 font-medium">
          <a href="#">Login</a>
        </li>
        <li className="text-white hover:text-yellow-300 px-3 py-2 font-medium">
          <a href="#">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
