import React from 'react';
import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <div class='grid-container'>
      <div class='grid-y'>
        <div class='cell'>
          <div class='grid-x align-center'>
            <div class='cell shrink'>
              <h1>AppArCar</h1>
            </div>
          </div>
        </div>
        <div class='cell'>
          <div class='grid-x align-center'>
            <div class='cell shrink'>
              <Link className='button large button-primary' to='/signin'>Log In</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;