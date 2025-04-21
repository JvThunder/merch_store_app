import CartItem from "./CartItem"; // Fixed import

export default function Cart({ cart }) {
  const totalPrice = cart.reduce((acc, item) => acc + parseFloat(item.price), 0);

  return (
    <div>
      {cart.length === 0 ? (
        <p>Your cart is currently empty</p>
      ) : (
        <>
          <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
            {cart.map((item, index) => (
              <CartItem key={index} item={item} price={item.price} />
            ))}
          </ul>
          <h3>Total: ${totalPrice.toFixed(2)}</h3>
        </>
      )}
    </div>
  );
}
