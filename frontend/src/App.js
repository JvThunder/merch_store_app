import React, { useState, useEffect } from "react";
import ProductItem from "./ProductItem";
import Cart from "./Cart";
import productsData from "./products.json";

// Simulate API fetch function
const fetchProducts = () => {
  return new Promise((resolve) => {
    // Simulate network delay
    setTimeout(() => {
      resolve(productsData);
    }, 10000);
  });
};

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // Simulate fetching products from an API
  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetchProducts();
        console.log(response.data);
        setProducts(response.data);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    getProducts();
  }, []);

  // Function to handle adding items to the cart
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Function to clear the cart
  const clearCart = () => {
    setCart([]);
  };

  return (
    <div style={{ display: "flex", padding: "20px" }}>
      {/* Left section: Products list */}
      <div style={{ flex: 2, marginRight: "40px" }}>
        <h1>Merch Store</h1>
        {products.map((item) => (
          <ProductItem key={item.id} product={item} addToCart={addToCart} />
        ))}
      </div>

      {/* Right section: Cart and checkout form */}
      <div style={{ flex: 1 }}>
        <h2>Cart</h2>
        <button onClick={clearCart} style={{ marginBottom: "10px" }}>
          Clear Cart
        </button>
        <Cart cart={cart} />
      </div>
    </div>
  );
}

export default App;
