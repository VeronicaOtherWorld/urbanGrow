import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-20 flex items-center px-4 md:px-8 z-50 transition-opacity duration-500 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* logo part */}
      <h1 className="text-xl bg-transparent font-bold text-green-600">
        UrbanGrow
      </h1>
      {/* menus */}
      <nav className="hidden md:flex gap-6 absolute left-1/2 transform -translate-x-1/2">
        <Link to="/" className="text-[#91cd4c] hover:text-green-600">
          Home
        </Link>
        <Link to="/diagnosis" className="text-[#91cd4c] hover:text-green-600">
          Diagnosis
        </Link>
        <Link to="/products" className="text-[#91cd4c] hover:text-green-600">
          Products
        </Link>
        <Link to="/services" className="text-[#91cd4c] hover:text-green-600">
          Services
        </Link>
        <Link to="/community" className="text-[#91cd4c] hover:text-green-600">
          Community
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
