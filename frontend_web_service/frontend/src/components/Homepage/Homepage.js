import React from 'react';
import { isLoggedIn } from '../../utils/isLoggedIn';
import { Link } from 'react-router-dom';
import coverVideo from "../../assets/mp4/trafico.mp4";
import logo from '../../assets/img/apparcar-full.png'

function Homepage() {
  let redirectButtonPath = '/signin';
  let redirectButtonText = 'Log In';
  if (isLoggedIn()) {
    redirectButtonPath = '/dashboard';
    redirectButtonText = 'Dashboard'
  } 
  return (
    <div className='container-grid'>
      <video id="homepage-video" src={coverVideo} autoPlay loop muted />
      <div className="cover-container"></div>
      <div className='grid-y'>
        <div className='cell small-6'>
          <div className='grid-x align-center'>
            <div className='cell shrink'>
              <img src={logo} alt='Logo' className="home-logo"></img>
            </div>
          </div>
        </div>
        <div className='cell small-3'>
          <div className='grid-x align-center'>
            <div className='cell shrink'>
              <h2 className='subtitle'>Near, Available and Cheap</h2>
            </div>
          </div>
        </div>
        <div className='cell small-3'>
          <div className='grid-x align-center'>
            <div className='cell shrink'>
            <Link to={redirectButtonPath}>
              <button className="homepage-button">{redirectButtonText}</button>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;