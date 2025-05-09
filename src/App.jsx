import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import FoodList from './FoodList';
import FoodDetail from './FoodDetail';
import Cart from './Cart';
import Footer from './Footer';
import Login from './Login';
import Home from './Home';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
      <Route path="/" element={<Login />} />  
  <Route path="/home" element={<Home />} />  
  <Route path="/menu" element={<FoodList />} />
  <Route path="/food/:id" element={<FoodDetail />} />
  <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;