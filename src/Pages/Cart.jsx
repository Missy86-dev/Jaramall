import React, { useState } from "react";

function Cart({ cart, onRemoveFromCart, onClearCart }) {
  const [isCheckout, setIsCheckout] = useState(false);
  const [method, setMethod] = useState("card");
  const [isPaid, setIsPaid] = useState(false);

  // Price calculations
  const subtotal = cart.reduce(
    (sum, item) =>
      sum + (typeof item.price === "number" ? item.price * 1200 : 0),
    0,
  );
  const delivery = subtotal > 0 ? 2500 : 0;
  const total = subtotal + delivery;

  const fmt = (amt) =>
    `₦${amt.toLocaleString("en-US", { minimumFractionDigits: 2 })}`;

  if (isPaid) {
    return (
      <div className="p-8 text-center bg-[#f4f1ea] max-w-md mx-auto my-12 rounded-xl">
        <h2 className="text-2xl font-serif font-bold text-emerald-700 mb-2">
          Order Confirmed! ✓
        </h2>
        <p className="text-sm text-neutral-600 mb-6">
          Thank you for shopping with JaraMall.
        </p>
        <button
          onClick={() => setIsPaid(false)}
          className="bg-slate-900 text-white text-xs uppercase px-6 py-3 font-semibold"
        >
          Back to Shop
        </button>
      </div>
    );
  }

  if (cart.length === 0)
    return (
      <div className="p-16 text-center font-serif text-neutral-600">
        Your cart is empty.
      </div>
    );

  return (
    <div className="max-w-[700px] mx-auto px-4 py-8">
      <h2 className="font-serif text-2xl font-medium mb-6 border-b pb-2">
        Your Cart ({cart.length})
      </h2>

      {/* Cart Items */}
      <div className="divide-y divide-neutral-200 mb-6">
        {cart.map((item, idx) => (
          <div
            key={idx}
            className="py-4 flex justify-between items-center gap-4"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt=""
                className="w-14 h-14 object-contain bg-[#f4f1ea] p-1"
              />
              <div>
                <h4 className="font-serif text-sm font-medium line-clamp-1">
                  {item.title}
                </h4>
                <span className="text-xs text-neutral-600">
                  {fmt(item.price * 1200)}
                </span>
              </div>
            </div>
            <button
              onClick={() => onRemoveFromCart(idx)}
              className="text-xs text-red-500 hover:underline"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="bg-[#f4f1ea] p-6 rounded-lg">
        <div className="text-xs flex justify-between mb-2">
          <span>Subtotal:</span>
          <span>{fmt(subtotal)}</span>
        </div>
        <div className="text-xs flex justify-between mb-4">
          <span>Delivery:</span>
          <span>{fmt(delivery)}</span>
        </div>
        <div className="text-lg font-serif font-bold flex justify-between mb-6">
          <span>Total:</span>
          <span>{fmt(total)}</span>
        </div>

        <button
          onClick={() => setIsCheckout(true)}
          className="w-full bg-slate-900 text-white text-xs uppercase tracking-widest py-3.5 font-semibold"
        >
          Checkout
        </button>
      </div>

      {/* Minimal Checkout Modal */}
      {isCheckout && (
        <div className="fixed inset-0 bg-slate-900/50 flex items-center justify-center p-4 z-50">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setIsPaid(true);
              setIsCheckout(false);
              if (onClearCart) onClearCart();
            }}
            className="bg-white p-6 rounded-xl w-full max-w-sm flex flex-col gap-3"
          >
            <h3 className="font-serif text-lg font-bold">Checkout</h3>
            <input
              required
              placeholder="Full Name"
              className="border p-2 text-sm rounded"
            />
            <input
              required
              type="email"
              placeholder="Email"
              className="border p-2 text-sm rounded"
            />

            {/* 3 Payment Options */}
            <div className="grid grid-cols-3 gap-2 my-2">
              {["card", "paystack", "transfer"].map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setMethod(m)}
                  className={`p-2 border text-xs capitalize rounded ${method === m ? "border-slate-900 bg-slate-100 font-bold" : "text-neutral-500"}`}
                >
                  {m}
                </button>
              ))}
            </div>

            <button
              type="submit"
              className="bg-emerald-700 text-white text-xs uppercase py-3 font-semibold rounded"
            >
              Pay {fmt(total)}
            </button>
            <button
              type="button"
              onClick={() => setIsCheckout(false)}
              className="text-xs text-neutral-500 mt-1"
            >
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Cart;
