import React from "react";
import { Link } from "react-router-dom";

function NavBar({ cartCount, activeTab, setActiveTab }) {
  const buttonStyle = `border-none text-[0.95rem] font-medium text-slate-600 px-4 py-2 
            rounded-xl cursor-pointer transition-all duration-200 ease-in-out`;

  return (
    <header className="flex justify-between items-center px-12 py-6 border-b border-slate-200">
      <h1 className="font-['Fredoka'] text-2xl font-extrabold tracking-normal">
        <Link
          to="/"
          onClick={() => setActiveTab("shop")}
          className="inline-block hover:opacity-90 transition-opacity"
        >
          <span className="text-blue-700">Jara</span>
          <span className="text-green-700">Mall</span>
        </Link>
      </h1>
      <nav>
        <button
          className={`${buttonStyle} ${activeTab === "shop" ? "bg-gray-100" : ""}`}
          onClick={() => setActiveTab("shop")}
        >
          Shop
        </button>
        <button
          className={`${buttonStyle} ${activeTab === "cart" ? "bg-gray-100" : ""}`}
          onClick={() => setActiveTab("cart")}
        >
          Cart ({cartCount})
        </button>
      </nav>
    </header>
  );
}

export default NavBar;
