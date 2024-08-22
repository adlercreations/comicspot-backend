import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';

function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Ranking</Link></li>
        <li><Link to="/favorites">Favorites</Link></li>
        <li><Link to="/explore">Explore</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;