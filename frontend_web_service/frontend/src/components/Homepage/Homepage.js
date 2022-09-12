import React from 'react';
import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <div>
      <Link to='/signin'>Log In</Link>
    </div>
  );
}

export default Homepage;