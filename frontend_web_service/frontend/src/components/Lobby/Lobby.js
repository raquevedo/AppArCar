import React from 'react';
import { Link } from 'react-router-dom';

import "../../index.css";
import SignIn from '../SignIn/SignIn';

function Lobby() {
  return (
   
      <div className='container-grid'>
        <SignIn/>
      </div>
    
  );
}

export default Lobby;