import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
      <div className='grid-x'>
        <div>
          <ul data-dropdown-menu>
            <Link to='/'>
              <li>AppArCar</li>
            </Link>
          </ul>
        </div>
        <div>
          <Link to='aboutus'>
            <li>About Us</li>
          </Link>
          { props.userLoggedIn && 
            <button type='button' onClick={logUserOut}>
              Log Out
            </button>
          }
        </div>
      </div>
    </div>
  );
}
export default Navbar;