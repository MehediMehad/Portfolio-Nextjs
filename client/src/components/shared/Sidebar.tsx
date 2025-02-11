"use client";

import { useState } from "react";
import { Home, LayoutDashboard, Users, Settings, Menu } from "lucide-react";
import Link from "next/link";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={`bg-gray-800 text-white h-screen p-5 transition-all duration-300 ${
        isOpen ? "w-64" : "w-20"
      }`}
    >
      <div className="flex items-center justify-between mb-8">
        <h1
          className={`text-xl font-bold transition-all duration-300 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          Dashboard
        </h1>
        <button
          className="text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu size={24} />
        </button>
      </div>

      <ul className="space-y-4">
        <Link
          href={"/"}
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 transition"
        >
          <Home size={20} />
          <span className={`${isOpen ? "block" : "hidden"}`}>Home</span>
        </Link>
        <Link
          href={"/dashboard"}
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 transition"
        >
          <LayoutDashboard size={20} />
          <span className={`${isOpen ? "block" : "hidden"}`}>Dashboard</span>
        </Link>
        <Link
          href={"/profile"}
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 transition"
        >
          <Users size={20} />
          <span className={`${isOpen ? "block" : "hidden"}`}>Users</span>
        </Link>
        <Link
          href={"/settings"}
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 transition"
        >
          <Settings size={20} />
          <span className={`${isOpen ? "block" : "hidden"}`}>Settings</span>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
