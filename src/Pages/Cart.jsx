import React from "react";

function Cart({ cart, onRemoveFromCart }) {
  if (cart.length === 0) {
    return (
      <div className="max-w-[1280px] mx-auto px-4 py-16 text-center">
        <p className="font-serif text-lg sm:text-xl text-neutral-600 mb-4">
          Your cart is currently empty.
        </p>
      </div>
    );
  }

  // Helper function to format prices cleanly
  const formatPrice = (price) => {
    const numPrice = typeof price === "number" ? price * 1200 : 0;
    return `₦${numPrice.toLocaleString("en-US")}`;
  };

  const formatTotal = (amount) => {
    return `₦${amount.toLocaleString("en-US")}`;
  };

  const totalPrice = cart.reduce((sum, item) => {
    const numPrice =
      typeof item.price === "number"
        ? item.price * 1200
        : Number(String(item.price).replace(/[^0-9.]/g, "")) || 0;
    return sum + numPrice;
  }, 0);

  return (
    <div className="w-full max-w-[800px] mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <h2 className="font-serif text-2xl sm:text-3xl font-medium mb-8 text-slate-900 border-b border-neutral-200 pb-4">
        Your Cart ({cart.length})
      </h2>

      {/* Cart Items List */}
      <div className="flex flex-col divide-y divide-neutral-200/80 mb-8">
        {cart.map((product, index) => (
          <div
            key={index}
            className="py-4 sm:py-6 flex items-center justify-between gap-4"
          >
            <div className="flex items-center gap-4 sm:gap-6">
              {product.image && (
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#f4f1ea] shrink-0 flex items-center justify-center p-2">
                  <img
                    src={product.image}
                    alt={product.title || product.name}
                    className="max-h-full max-w-full object-contain mix-blend-multiply"
                  />
                </div>
              )}
              <div>
                <span className="block text-[10px] font-semibold tracking-widest text-neutral-400 uppercase mb-0.5">
                  {product.category || "COLLECTION"}
                </span>
                <h4 className="font-serif text-sm sm:text-base font-medium text-slate-900 line-clamp-1">
                  {product.title || product.name}
                </h4>
                <span className="text-xs sm:text-sm font-medium text-neutral-600 block mt-1">
                  {typeof product.price === "number"
                    ? formatPrice(product.price)
                    : product.price}
                </span>
              </div>
            </div>

            <button
              className="text-xs sm:text-sm text-neutral-400 hover:text-red-600 font-medium transition-colors p-2 shrink-0"
              onClick={() => onRemoveFromCart(index)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Checkout Summary */}
      <div className="bg-[#f4f1ea] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="text-xs uppercase tracking-widest text-neutral-500 block mb-1">
            Order Total
          </span>
          <span className="font-serif text-2xl sm:text-3xl font-medium text-slate-900">
            {formatTotal(totalPrice)}
          </span>
        </div>

        <button className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm uppercase tracking-widest font-semibold px-8 py-3.5 transition-colors cursor-pointer">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
