import React from "react";
import { Link } from "react-router-dom";

function NavBar({ cartCount, activeTab, setActiveTab }) {
  return (
    <header className="w-full bg-[#fcfbf9] border-b border-neutral-200/60 sticky top-0 z-50 backdrop-blur-md bg-opacity-90">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link
          to="/"
          onClick={() => setActiveTab("shop")}
          className="font-serif text-xl sm:text-2xl font-bold text-slate-900 tracking-tight hover:opacity-80 transition-opacity"
        >
          JaraMall
        </Link>

        <div className="flex items-center gap-2 sm:gap-4">
          <button
            className={`text-xs sm:text-sm font-medium px-3.5 py-1.5 rounded-full transition-all duration-200 ${
              activeTab === "shop"
                ? "bg-slate-900 text-white"
                : "text-slate-600 hover:text-slate-900"
            }`}
            onClick={() => setActiveTab("shop")}
          >
            Shop
          </button>

          <button
            className={`text-xs sm:text-sm font-medium px-3.5 py-1.5 rounded-full transition-all duration-200 ${
              activeTab === "cart"
                ? "bg-slate-900 text-white"
                : "text-slate-600 hover:text-slate-900"
            }`}
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
