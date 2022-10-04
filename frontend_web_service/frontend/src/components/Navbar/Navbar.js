import React from 'react';


function Navbar() {
  return (
    <div className="navbar">
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="dropdown menu" data-dropdown-menu>
            <Link to='/'>
              <li classNameName="menu-text">AppArCar</li>
            </Link>
          </ul>
        </div>
      <div className="top-bar-right"></div>
      </div>
    </div>
  );
}

export default Navbar;