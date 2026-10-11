import React, { useState } from "react";
import NavBar from "./Components/NavBar";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import Footer from "./Components/Footer";
import "./App.css";

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
    <div className="app-container">
      <NavBar
        cartCount={cart.length}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <main>
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
