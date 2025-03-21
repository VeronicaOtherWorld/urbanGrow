// src/components/BottomTab.jsx
import React from "react";
import { Link } from "react-router-dom";

const tabs = [
  { name: "Home", path: "/", icon: "🏠" },
  { name: "Products", path: "/products", icon: "🏠" },
  { name: "Diagnosis", path: "/diagnosis", icon: "🏠" },
  { name: "Services", path: "/services", icon: "🏠" },
  { name: "Community", path: "/community", icon: "🏠" },
];

const BottomTab = ({ currentPath }) => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t flex justify-between items-center h-16 shadow-md md:hidden">
      {tabs.map((tab) => (
        <Link
          key={tab.path}
          to={tab.path}
          className={`flex flex-col items-center justify-center text-center flex-1 ${
            currentPath === tab.path
              ? "text-green-600 font-bold"
              : "text-gray-500"
          }`}
        >
          <div className="text-xl mb-1 flex">{tab.icon}</div>
          <div className="text-xs flex">{tab.name}</div>
        </Link>
      ))}
    </div>
  );
};

export default BottomTab;
