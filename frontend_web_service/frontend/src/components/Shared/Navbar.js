import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="dropdown menu" data-dropdown-menu>
            <Link to='/'>
              <li className="menu-text">AppArCar</li>
            </Link>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="dropdown menu" data-dropdown-menu>
            <Link to='aboutus'>
              <li className="menu-text">About Us</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;