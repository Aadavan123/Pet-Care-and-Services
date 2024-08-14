import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/Logo.png';
import '../assets/Header.css';

const Header = ({ isLoggedIn, onLogout }) => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
          <li className="nav-item"><Link to="/pets" className="nav-link">Pets</Link></li>
          <li className="nav-item"><Link to="/products" className="nav-link">Products</Link></li>
          <li className="nav-item"><Link to="/services" className="nav-link">Services</Link></li>
          {isLoggedIn ? (
            <>
              <li className="nav-item"><Link to="/cart" className="nav-link">Cart</Link></li>
              <li className="nav-item">
                <button className="nav-link" onClick={onLogout}>Logout</button>
              </li>
            </>
          ) : (
            <li className="nav-item"><Link to="/login" className="nav-link">Login</Link></li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
