import React from 'react';
import { isLoggedIn } from '../../utils/isLoggedIn';
import { Link } from 'react-router-dom';

function Homepage() {
  let redirectButtonPath = '/signin';
  let redirectButtonText = 'Log In';
  if (isLoggedIn()) {
    redirectButtonPath = '/dashboard';
    redirectButtonText = 'Dashboard'
  } 
  return (
    <div className='container-grid'>
      <div className="cover-container">
        <Link to={redirectButtonPath}>
          <button className="button">{redirectButtonText}</button>
        </Link>
        <p className='short'>Cercano, Disponible y Economico</p>
      </div>
    </div>
  );
}

export default Homepage;