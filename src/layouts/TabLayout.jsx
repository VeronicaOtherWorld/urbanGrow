import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import BottomTab from "../components/BottomTab";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const TabLayout = () => {
  const location = useLocation();
  return (
    <div className="min-h-screen w-full mx-auto flex flex-col">
      <div className="flex-1 overflow-y-auto pb-16">
        {/* top navbar */}
        <Navbar></Navbar>
        {/* outlet parts */}
        <div className="flex-1 mt-20 overflow-y-auto">
          <Outlet />
        </div>
      </div>
      {/* footer */}
      <Footer />
      {/* bottom tabs */}
      <BottomTab currentPath={location.pathname} />
    </div>
  );
};

export default TabLayout;
