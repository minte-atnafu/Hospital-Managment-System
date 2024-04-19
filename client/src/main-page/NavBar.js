import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to='/' className="navbar-item">
          Home
        </Link>
        <Link to="/announcement" className="navbar-item">
          Announcement
        </Link>
        <Link to="/login" className="navbar-item login-link">
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
