import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to My Shop</h1>
      <p>Order your favorite food here!</p>
      <Link to="/menu">
        <button className="shop-now-btn">Shop Now</button>{/*Go to menu page*/}
      </Link>
    </div>
  );
}

export default Home;