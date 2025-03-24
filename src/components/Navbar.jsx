import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      className="fixed top-0 left-0 w-full bg-transparent
     h-20 flex items-center px-4 md:px-8 z-50"
    >
      {/* logo part */}
      <h1 className="text-xl bg-transparent font-bold text-green-600">
        UrbanGrow
      </h1>
      {/* menus */}
      <nav className="hidden md:flex gap-6 absolute left-1/2 transform -translate-x-1/2">
        <Link to="/" className="text-gray-700 hover:text-green-600">
          Home
        </Link>
        <Link to="/diagnosis" className="text-gray-700 hover:text-green-600">
          Diagnosis
        </Link>
        <Link to="/products" className="text-gray-700 hover:text-green-600">
          Products
        </Link>
        <Link to="/services" className="text-gray-700 hover:text-green-600">
          Services
        </Link>
        <Link to="/community" className="text-gray-700 hover:text-green-600">
          Community
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
