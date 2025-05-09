import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import foods from './FoodData';
import { CartContext } from './CartContext';



function FoodList() {
  const { addToCart } = useContext(CartContext);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFoods = foods.filter(food =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: '20px' }}>
      <h1>Our Menu</h1>
      <input
        type="text"
        placeholder="Search food..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: '5px', marginBottom: '15px' }}
      />

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
        {filteredFoods.map(food => (
          <div key={food.id} style={{ border: '1px solid #ddd', padding: '10px', width: '200px' }}>
            <img src={food.image} alt={food.name} style={{ width: '100%' }} />
            <h3>{food.name}</h3>
            <p>₹ {food.price}</p>
            <Link to={`/food/${food.id}`}>
              <button style={{ marginRight: '5px' }}>View Details</button>
            </Link>
            <button onClick={() => addToCart(food)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FoodList;