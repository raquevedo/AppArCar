import React from 'react';
import Login from '../Login/Login';
import Register from '../Register/Register';
import useToken from '../../utils/useToken';

function SignIn() {
  const { token, setToken } = useToken();
  return (
    <div className='grid-container'>
      <div className='grid-x grid-margin-x grid-padding-x'>
        <div className='cell medium-6 small-12'>
          <Login setToken={setToken} />
        </div>
        <div className='cell medium-6 small-12'>
          <Register />
        </div>
      </div>
    </div>
  );
}

export default SignIn;