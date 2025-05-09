import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#ff6347', color: '#fff' }}>
      <Link to="/login" style={{ margin: '0 10px', color: '#fff' }}>Login</Link>
      <Link to="/home" style={{ margin: '0 10px', color: '#fff' }}>Home</Link>   {/* Point Home to /menu */}
      <Link to="/menu" style={{ margin: '0 10px', color: '#fff' }}>Menu</Link>
      <Link to="/cart" style={{ margin: '0 10px', color: '#fff' }}>Cart</Link>
    </nav>
  );
}

export default Navbar;