import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import BottomTab from "../components/BottomTab";

const TabLayout = () => {
  const location = useLocation();
  return (
    <div className="min-h-screen max-w-[430px] mx-auto flex flex-col">
      <div className="flex-1 overflow-y-auto pb-16">
        <Outlet />
      </div>
      <BottomTab currentPath={location.pathname} />
    </div>
  );
};

export default TabLayout;
