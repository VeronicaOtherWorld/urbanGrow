import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

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

        {/* Services with dropdown */}
        <div className="relative group">
          <Link
            to="/services"
            className="text-[#91cd4c] hover:text-green-600 px-2 py-1"
          >
            Services
          </Link>

          <div
            className="absolute left-1/2 -translate-x-1/2 top-full bg-white shadow-md rounded-xl px-4 py-2 z-50
                  hidden group-hover:flex space-x-6 pointer-events-auto transition-all duration-150 hover:delay-100"
          >
            <HashLink
              smooth
              to="/services#experts"
              className="text-[#91cd4c] text-center"
            >
              Expert
            </HashLink>
            <HashLink
              smooth
              to="/services#helpers"
              className="text-[#91cd4c] text-center"
            >
              Helper
            </HashLink>
          </div>
        </div>

        <Link to="/community" className="text-[#91cd4c] hover:text-green-600">
          Community
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
