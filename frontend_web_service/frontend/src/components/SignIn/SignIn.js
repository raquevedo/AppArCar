import React from 'react';
import Login from '../Login/Login';
import Register from '../Register/Register';
import useToken from '../../utils/useToken';

function SignIn() {
  const { token, setToken } = useToken();
  return (
    <div class='grid-container'>
      <div class='grid-x grid-margin-x grid-padding-x'>
        <div class='cell medium-6 small-12'>
          <Login setToken={setToken} />
        </div>
        <div class='cell medium-6 small-12'>
          <Register />
        </div>
      </div>
    </div>
  );
}

export default SignIn;