import React from 'react';
import { Link } from 'react-router-dom';
import burger from '../../assets/img/burger.png';
import github from '../../assets/img/GitHub-Mark-64px.png';
import apparcar from '../../assets/img/apparcar-simple.png';

function Navbar(props) {
  return (
    <ul className='navbar'>
      <li className='navbar-item'>
        <img 
          src={burger}
          className='navbar-icon'
          id='burger-icon'
          alt='burger'
        />
      </li>
      <li className='navbar-item'>
        <Link to='/'>
          <img 
            src={apparcar} 
            className='navbar-icon' 
            id='navbar-icon' 
            alt='apparcar'
          />
        </Link>
      </li>
      <li className='navbar-item float-right'>
        <a href='https://github.com/raquevedo/AppArCar' className='navbar-link'>
          <img className='navbar-icon' src={github} alt='github'></img>
        </a>
      </li>
      { props.userLoggedIn &&
        <li className='navbar-item float-right'>
          <Link to='/logout' className='navbar-link'>
            Log Out
          </Link>
        </li>
      }
      <li className='navbar-item float-right'>
        <Link to='/aboutus' className='navbar-link'>
          About Us
        </Link>
      </li>
    </ul>
  );
}

export default Navbar;
