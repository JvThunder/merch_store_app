import React, { useState, useEffect } from "react";
import ProductItem from "./ProductItem";
import Cart from "./Cart";
// import productsData from "./products.json";
import axios from "axios";
// import { BACKEND_URL } from ".env";

// Simulate API fetch function
const fetchProducts = async () => {
  const response = await axios.get(`http://127.0.0.1:8000/store/list/`);
  return response.data;
};

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // Simulate fetching products from an API
  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetchProducts();
        console.log(response.products);
        setProducts(response.products);
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
