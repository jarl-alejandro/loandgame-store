'use client'

import { useState } from 'react';
import storeStyle from './stores.module.css';


function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full bg-sidebar py-5 px-6 sm:hidden">
      <div className="flex items-center justify-between">
        <a href="index.html" className="text-white text-3xl font-semibold uppercase hover:text-gray-300">Admin</a>
        <button onClick={toggleNav} className="text-white text-3xl focus:outline-none">
          <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </button>
      </div>

      {/* Dropdown Nav */}
      <nav className = {isOpen ?'flex flex-col pt-4' : 'flex-col pt-4 hidden'}>
        <a href="index.html" className="flex items-center active-nav-link text-white py-2 pl-4 nav-item">
          <i className="fas fa-tachometer-alt mr-3"></i>
          Dashboard
        </a>
        <a href="blank.html" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
          <i className="fas fa-sticky-note mr-3"></i>
          Blank Page
        </a>
        {/* Add more navigation items as needed */}
      </nav>
      <button className="w-full bg-white cta-btn font-semibold py-2 mt-3 rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
        <i className="fas fa-arrow-circle-up mr-3"></i> Upgrade to Pro!
      </button>
    </header>
  );
}

export default MobileHeader;