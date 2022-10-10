import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo solo.png'
import "./index.css";

function Navbar() {
  return (
    <div className="navvar">
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="dropdown menu" data-dropdown-menu>
            <Link to='/'>
            <img src={logo} alt='Logo' className="logo"></img>
            </Link>
          </ul>
        </div>
      <div className="top-bar-right"></div>
      </div>
    </div>
  );
}

export default Navbar;