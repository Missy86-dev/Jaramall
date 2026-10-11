import React from "react";

function Cart({ cart, onRemoveFromCart }) {
  if (cart.length === 0) {
    return (
      <p className="text-center text-slate-500 text-[1.1rem]">
        Your cart is currently empty.
      </p>
    );
  }

  // Reusable helper function for clean decimals and comma separation
  const formatPrice = (price) => {
    const numPrice = typeof price === "number" ? price * 1200 : 0;
    return `₦${numPrice.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  // Helper for the total price amount directly
  const formatTotal = (amount) => {
    return `₦${amount.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  const totalPrice = cart.reduce((sum, item) => {
    const numPrice =
      typeof item.price === "number"
        ? item.price * 1200
        : Number(String(item.price).replace(/[^0-9.]/g, "")) || 0;

    return sum + numPrice;
  }, 0);

  return (
    <section
      className="max-w-[800px] mx-auto bg-white border border-slate-200 
     rounded-xl p-8"
    >
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>
      <ul className="list-none p-0 m-0">
        {cart.map((product, index) => (
          <li
            key={index}
            className="flex justify-between items-center gap-4 py-4 border-b border-slate-100"
          >
            {product.image && (
              <img
                src={product.image}
                alt={product.title || product.name}
                className="w-[50px] h-[50px] object-contain rounded-md bg-slate-50 py-1 border border-slate-200 shrink-0"
              />
            )}
            <div className="flex-1 flex items-center justify-between font-medium text-slate-800 gap-2">
              <span>{product.title || product.name}</span> -{" "}
              <span>
                {typeof product.price === "number"
                  ? formatPrice(product.price)
                  : product.price}
              </span>
            </div>
            <button
              className="bg-red-500 hover:bg-red-600 active:scale-[0.97] text-white border-none rounded-md px-[0.85rem] py-[0.4rem] text-[0.85rem] font-semibold cursor-pointer transition-colors duration-200 shrink-0"
              onClick={() => onRemoveFromCart(index)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-8 pt-6 border-t-2 border-dashed border-slate-200 flex justify-between items-center">
        <h2 className="text-xl mb-0">Total: {formatTotal(totalPrice)}</h2>
        <button className="bg-emerald-600 hover:bg-emerald-700 text-white border-none px-6 py-3 text-base font-bold rounded-md cursor-pointer transition-colors duration-200">
          Checkout
        </button>
      </div>
    </section>
  );
}

export default Cart;
