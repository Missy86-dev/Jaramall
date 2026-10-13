import React, { useState } from "react";
import NavBar from "./Components/NavBar";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import Footer from "./Components/Footer";

function App() {
  const [activeTab, setActiveTab] = useState("shop");
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (indexToRemove) => {
    setCart((prevCart) =>
      prevCart.filter((_, index) => index !== indexToRemove),
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fcfbf9] text-slate-800 antialiased">
      <NavBar
        cartCount={cart.length}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <main className="flex-grow w-full">
        {activeTab === "shop" ? (
          <Shop onAddToCart={addToCart} />
        ) : (
          <Cart cart={cart} onRemoveFromCart={removeFromCart} />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
