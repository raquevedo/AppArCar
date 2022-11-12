import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../../assets/img/logo solo.png";
import "../../index.css";
import { deleteToken } from '../../utils/authToken';

function Navbar(props) {
  const navigate = useNavigate()
  
  const logUserOut = () => {
    deleteToken();
    props.setUserLoggedIn(false);
    navigate('/');
  }

  return (
    <div>
      <div className='grid-x bar '>
        <div>
          <ul className="dropdown menu " data-dropdown-menu>
            <Link to='/'>
            <img src={logo} alt="Logo" className="navbar-logo" ></img>
            </Link>
          </ul>
        </div>
        <div className="top-bar-right center">
          <Link to='aboutus'>
            <li className="text-nav ">About Us</li>
          </Link>
          { props.userLoggedIn && 
            <button type='button' className='text-nav' onClick={logUserOut}>
              Log Out
            </button>
          }
        </div>
      </div>
    </div>
  );
}
export default Navbar;