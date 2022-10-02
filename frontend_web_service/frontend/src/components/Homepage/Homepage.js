import React from 'react';
import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <div className='grid-container'>
      <div className='grid-y'>
        <div className='cell'>
          <div className='grid-x align-center'>
            <div className='cell shrink'>
              <h1>AppArCar</h1>
            </div>
          </div>
        </div>
        <div className='cell'>
          <div className='grid-x align-center'>
            <div className='cell shrink'>
              <Link className='button large button-primary' to='/signin'>Log In</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;