import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/img/logo solo.png";
import "../../index.css";

function Navbar() {
  return (
    
    <div  >
      
      <div >
        <div >
          <ul className="dropdown menu bar" data-dropdown-menu>
            <Link to='/'>
            <img src={logo} alt="Logo" className="navbar-logo" ></img>
            </Link>
          </ul>
        </div>
      <div className="top-bar-right bar"></div>
      </div>
    </div>
    
    
  );
}

export default Navbar;