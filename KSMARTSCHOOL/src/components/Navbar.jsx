import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-700 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h2 className="text-2xl font-bold">Ksmartschool</h2>
        <ul className="flex gap-6 text-lg">
          <li><a href="#" className="hover:text-yellow-300">About</a></li>
          <li><a href="#" className="hover:text-yellow-300">Contact Us</a></li>
          <li><a href="#" className="hover:text-yellow-300">Login</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
