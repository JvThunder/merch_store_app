export default function CartItem({ item, index }) {
  return (
    <li key={index}>
      {item.name} - ${item.price.toFixed(2)}
    </li>
  );
}
