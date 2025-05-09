import { useContext } from 'react';
import { CartContext } from './CartContext';


function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - ₹ {item.price}
              <button onClick={() => removeFromCart(item.id)} style={{ marginLeft: '10px' }}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;