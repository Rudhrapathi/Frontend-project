import { useParams } from 'react-router-dom';
import foods from './FoodData';
import { useContext } from 'react';
import { CartContext } from './CartContext';

function FoodDetail() {
  const { id } = useParams();
  const food = foods.find(f => f.id === parseInt(id));
  const { addToCart } = useContext(CartContext);

  if (!food) {
    return <h2>Food not found</h2>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>{food.name}</h2>
      <img src={food.image} alt={food.name} style={{ width: '300px' }} />
      <p>{food.description}</p>
      <p><strong>Price:</strong> ₹ {food.price}</p>
      <button onClick={() => addToCart(food)}>Add to Cart</button>
    </div>
  );
}

export default FoodDetail;