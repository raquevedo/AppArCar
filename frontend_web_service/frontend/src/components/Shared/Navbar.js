import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { deleteToken } from '../../utils/authToken';
import burger from '../../assets/img/burger.png';
import github from '../../assets/img/GitHub-Mark-64px.png';

function Navbar(props) {
  const navigate = useNavigate()
  
  const logUserOut = () => {
    deleteToken();
    props.setUserLoggedIn(false);
    navigate('/');
  }

  return (
    <ul className='navbar'>
      <li className='navbar-item'>
        <img src={burger} className='navbar-icon' id='burger-icon'></img>
      </li>
      <li className='navbar-item'>
        <Link to='/' className='navbar-link'>
          AppArCar
        </Link>
      </li>
      <li className='navbar-item float-right'>
        <a href='https://github.com/raquevedo/AppArCar' className='navbar-link'>
          <img className='navbar-icon' src={github}></img>
        </a>
      </li>
      <li className='navbar-item float-right'>
        <Link to='/aboutus' className='navbar-link'>
          About Us
        </Link>
      </li>
    </ul>
  );
}

export default Navbar;
