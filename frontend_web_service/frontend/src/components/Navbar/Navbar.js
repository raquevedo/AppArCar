import React from 'react';


function Navbar() {
  return (
    <div class="navbar">
      <div class="title-bar" data-responsive-toggle="example-menu" data-hide-for="medium">
        <button class="menu-icon" type="button" data-toggle="example-menu"></button>
        <div class="title-bar-title">Menu</div>
        </div>
        <div class="top-bar">
          <div class="top-bar-left">
            <ul class="dropdown menu" data-dropdown-menu>
              <li class="menu-text">AppArCar</li>
            </ul>
          </div>
        <div class="top-bar-right">
        </div>
      </div>
    </div>
  );
}

export default Navbar;