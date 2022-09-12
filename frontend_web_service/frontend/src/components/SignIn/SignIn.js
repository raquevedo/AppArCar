import React from 'react';
import Login from '../Login/Login';
import Register from '../Register/Register';
import useToken from '../../utils/useToken';

function SignIn() {
  const { token, setToken } = useToken();
  return (
    <div>
      <Login setToken={setToken} />
      <Register />
    </div>
  );
}

export default SignIn;