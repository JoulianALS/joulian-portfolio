import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      {/* Left Side - Name */}
      <h1 className="navbar-name">Joulian Alsuliman</h1>

      {/* Right Side - Links */}
      <div className="navbar-links">
        <Link to="/">Startseite</Link>
        <Link to="/projects">Projekte</Link>
        <Link to="/contact">Kontakt</Link>
      </div>
    </nav>
  );
}

export default Navbar;
