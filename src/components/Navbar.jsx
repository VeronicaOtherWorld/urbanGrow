import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!isHome) return;

    const handleScroll = () => {
      console.log("trigger deploy");
      setVisible(window.scrollY <= 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  if (!visible) return null;
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
        <Link to="/" className="text-white hover:text-green-600">
          Home
        </Link>
        <Link to="/diagnosis" className="text-white hover:text-green-600">
          Diagnosis
        </Link>
        <Link to="/products" className="text-white hover:text-green-600">
          Products
        </Link>
        <Link to="/services" className="text-white hover:text-green-600">
          Services
        </Link>
        <Link to="/community" className="text-white hover:text-green-600">
          Community
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
