export default function ProductItem({ product, addToCart }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        marginBottom: "20px",
        padding: "15px",
        backgroundColor: "#f9f9f9",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2>
        {product.name} - ${product.price}
      </h2>

      <button
        style={{
          marginTop: "10px",
          padding: "8px 12px",
          border: "none",
          backgroundColor: "#007bff",
          color: "white",
          cursor: "pointer",
          borderRadius: "4px",
        }}
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
}
