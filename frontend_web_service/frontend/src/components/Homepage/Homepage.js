import React from 'react';
import "../../index.css";
import coverVideo from "../../assets/mp4/trafico.mp4"
import logo from '../../assets/img/logo p.png'

function Homepage() {
  return (
    <div className='container-grid'>
      <div className="cover-container">
            <video className="video" src={coverVideo} autoPlay loop muted />
            <img src={logo} alt='Logo' className="home-logo"></img>
            
            <a href="/signin"><button class="bn632-hover bn24">Log In</button></a>
            <p className='short'>Cercano, Disponible y Economico</p>
        </div>
    </div>
  );
}

export default Homepage;