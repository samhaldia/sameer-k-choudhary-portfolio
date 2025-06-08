// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import component-specific CSS

function Header() {
  return (
    <header className="header">
      <nav className="header-nav">
        <Link to="/" className="site-title">
          Sameer Kumar Choudhary
        </Link>
        <ul className="nav-links">
          <li><Link to="/" className="nav-item">Home</Link></li>
          <li><Link to="/about" className="nav-item">About</Link></li>
          <li><Link to="/projects" className="nav-item">Projects</Link></li>
          <li><Link to="/contact" className="nav-item">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
