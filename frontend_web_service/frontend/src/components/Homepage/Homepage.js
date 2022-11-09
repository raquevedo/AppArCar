import React from 'react';
import "../../index.css";
import coverVideo from "../../assets/mp4/trafico.mp4"
import logo from '../../assets/img/logo p.png'
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
        <video className="video" src={coverVideo} autoPlay loop muted />
        <img src={logo} alt='Logo' className="home-logo"></img>
        <Link to={redirectButtonPath}>
          <button className="bn632-hover bn24">{redirectButtonText}</button>
        </Link>
        <p className='short'>Cercano, Disponible y Economico</p>
      </div>
    </div>
  );
}

export default Homepage;