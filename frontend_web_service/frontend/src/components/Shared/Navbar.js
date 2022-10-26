import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/img/logo solo.png";
import "../../index.css";

function Navbar() {
  return (
    
    <div  >
      
      <div className='grid-x bar '>
        <div >
          <ul className="dropdown menu " data-dropdown-menu>
            <Link to='/'>
            <img src={logo} alt="Logo" className="navbar-logo" ></img>
            </Link>
          </ul>
          
        </div>
        <div className="top-bar-right center">
          <ul className="dropdown menu" data-dropdown-menu>
            <Link to='aboutus'>
              <li className="text-nav ">About Us</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
    
    
  );
}

export default Navbar;