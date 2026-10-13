import React, { useEffect, useState } from "react";

function Shop({ onAddToCart }) {
  const [product, setProduct] = useState([]);

  const formatPrice = (price) => {
    const numPrice = typeof price === "number" ? price * 1200 : 0;
    return `₦${numPrice.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  };

  function getallproducts() {
    fetch("https://fakestoreapi.com/products", { method: "GET" })
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }

  useEffect(() => {
    getallproducts();
  }, []);

  return (
    <div className="w-full max-w-[1440px] mx-auto px-3 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-slate-800">
        Our Products
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
        {product.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-slate-200 rounded-xl p-3 sm:p-4 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
          >
            <div>
              <div className="w-full h-36 sm:h-40 md:h-48 flex items-center justify-center bg-slate-50 rounded-lg mb-3 p-2">
                <img
                  src={item.image}
                  alt={item.title || item.name}
                  className="max-h-full max-w-full object-contain mix-blend-multiply"
                />
              </div>

              <h3 className="font-semibold text-slate-800 text-xs sm:text-sm md:text-base mb-1 line-clamp-1">
                {item.title || item.name}
              </h3>
              <p className="text-slate-500 text-[10px] sm:text-xs md:text-sm mb-3 line-clamp-2 leading-relaxed">
                {item.description}
              </p>
            </div>

            <div>
              <span className="text-xs sm:text-sm md:text-lg font-bold text-slate-900 block mb-2 sm:mb-3">
                {typeof item.price === "number"
                  ? formatPrice(item.price)
                  : item.price}
              </span>
              <button
                className="w-full bg-blue-600 text-white border-none rounded-lg py-2 px-2 text-xs sm:text-sm font-semibold cursor-pointer transition-all duration-150 hover:bg-blue-700 active:scale-[0.99]"
                onClick={() => onAddToCart(item)}
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
