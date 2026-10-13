import React, { useEffect, useState } from "react";

const RATE = 1200;

const formatPrice = (price) => {
  const num = typeof price === "number" ? price * RATE : 0;
  return `₦${num.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
};

function Shop({ onAddToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  return (
    <div className="w-full max-w-[1440px] mx-auto px-3 sm:px-6 md:px-8 py-6">
      <h2 className="text-xl sm:text-2xl font-bold mb-6 text-slate-800">
        Our Products
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-slate-200 rounded-xl p-3 sm:p-4 flex flex-col justify-between shadow-sm"
          >
            <div>
              <div className="w-full h-36 sm:h-44 flex items-center justify-center bg-slate-50 rounded-lg mb-3 p-2">
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-h-full max-w-full object-contain mix-blend-multiply"
                />
              </div>
              <h3 className="font-semibold text-slate-800 text-xs sm:text-sm mb-1 line-clamp-1">
                {item.title}
              </h3>
              <p className="text-slate-500 text-[10px] sm:text-xs mb-3 line-clamp-2">
                {item.description}
              </p>
            </div>

            <div>
              <span className="text-xs sm:text-base font-bold text-slate-900 block mb-2">
                {formatPrice(item.price)}
              </span>
              <button
                onClick={() => onAddToCart(item)}
                className="w-full bg-blue-600 hover:bg-blue-500 hover:scale-95 transition-all duration-200 ease-in-out text-white rounded-lg py-2 text-xs font-semibold"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
