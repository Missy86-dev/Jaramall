import React, { useEffect, useState } from "react";

const Products = [
  {
    id: 1,
    title: "Classic Sneakers",
    price: "₦35,000",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    description:
      "Comfortable everyday low-top sneakers crafted with premium materials.",
  },
  {
    id: 2,
    title: "Leather Backpack",
    price: "₦45,000",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
    description:
      "Spacious multi-compartment leather backpack designed for work and daily travel.",
  },
  {
    id: 3,
    title: "Wireless Headphones",
    price: "₦28,000",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    description:
      "High-fidelity noise-canceling headphones with extended battery life.",
  },
  {
    id: 4,
    title: "Smart Watch",
    price: "₦65,000",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    description:
      "Track your workouts, heart rate, and notifications in real time.",
  },
  {
    id: 5,
    title: "Designer Sunglasses",
    price: "₦18,000",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500",
    description:
      "Polarized UV400 protected sunglasses with a lightweight ergonomic frame.",
  },
  {
    id: 6,
    title: "Portable Speaker",
    price: "₦22,000",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500",
    description:
      "Compact waterproof Bluetooth speaker with 360-degree sound projection.",
  },
];

function Shop({ onAddToCart }) {
  const [product, setProduct] = useState([]);

  // Reusable helper function for clean decimals and comma separation
  const formatPrice = (price) => {
    const numPrice = typeof price === "number" ? price * 1200 : 0;
    return `₦${numPrice.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  function getallproducts() {
    fetch("https://fakestoreapi.com/products", { method: "GET" })
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }

  useEffect(() => {
    getallproducts();
  }, []);

  console.log(product);

  return (
    <section>
      <h2 className="text-center text-3xl font-bold mb-10 tracking-[--0.02rem]">
        Our Products
      </h2>
      <div className="grid grid-cols-3 gap-6">
        {product.map((product) => (
          <div
            key={product.id}
            className="bg-white border border-slate-200 rounded-xl p-6 text-center flex flex-col items-center justify-between shadow-sm"
          >
            <img
              src={product.image}
              alt={product.title || product.name}
              className="w-full max-w-[150px] h-[150px] object-contain mb-4 mix-blend-multiply"
            />
            <h3 className="text-base font-bold text-slate-900 mb-2 leading-[1.3] line-clamp-2 overflow-hidden">
              {product.title || product.name}
            </h3>
            <p className="text-[0.85rem] text-slate-500 mb-3 leading-[1.4] line-clamp-2 overflow-hidden">
              {product.description}
            </p>
            <p className="text-[1.15rem] font-bold text-emerald-600 mb-4 mt-auto">
              {typeof product.price === "number"
                ? formatPrice(product.price)
                : product.price}
            </p>
            <button
              className="w-full bg-blue-600 text-white border-none rounded-lg px-3 py-3 text-[0.95rem] font-semibold cursor-pointer transition-all duration-150 hover:bg-blue-700 active:scale-[0.99]"
              onClick={() => onAddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Shop;
