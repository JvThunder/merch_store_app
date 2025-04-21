export default function CartItem({ item, index }) {
  return (
    <li key={index}>
      {item.name} - ${item.price}
    </li>
  );
}
