import React from "react";
import { Link } from "react-router-dom";

function NavBar({ cartCount, activeTab, setActiveTab }) {
  const navBtnClass = (tab) =>
    `text-xs sm:text-sm font-medium px-4 py-1.5 rounded-full transition-all duration-200 ease-in-out ${
      activeTab === tab
        ? "bg-blue-600 hover:bg-blue-500 hover:scale-95 text-white shadow-sm"
        : "text-slate-600 hover:text-slate-900"
    }`;

  return (
    <header className="w-full bg-[#fcfbf9] border-b border-neutral-200/60 sticky top-0 z-50 backdrop-blur-md bg-opacity-90">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Two-Tone Logo: Jara in Dark Grey, Mall in Royal Blue */}
        <Link
          to="/"
          onClick={() => setActiveTab("shop")}
          className="font-bold text-xl sm:text-2xl tracking-tight transition-opacity hover:opacity-80"
        >
          <span className="text-slate-800">Jara</span>
          <span className="text-blue-600">Mall</span>
        </Link>

        {/* Navigation Actions */}
        <div className="flex items-center gap-2 sm:gap-4">
          <button
            className={navBtnClass("shop")}
            onClick={() => setActiveTab("shop")}
          >
            Shop
          </button>
          <button
            className={navBtnClass("cart")}
            onClick={() => setActiveTab("cart")}
          >
            Cart ({cartCount})
          </button>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
