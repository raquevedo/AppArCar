import React from 'react';
import Login from './Login';
import Register from './Register';
import useToken from '../../utils/useToken';
import { Navigate, useLocation } from 'react-router-dom';
import logo from '../../assets/img/logo p.png'

function SignIn() {
  let location = useLocation();
  const { setToken } = useToken();
  /* Checks if the user is already logged in and redirects to dashboard */
  if(sessionStorage.getItem('token')) {
    return <Navigate to="/dashboard" state={{ from: location }} replace />;
  }
  return (
    <div className='grid-container'>
      <div className='gasper'>Gasper</div>
      <div className='grid-x grid-margin-x grid-padding-x grid-margin-y grid-padding-y'>
        <div className='cell large-6 medium-12'>
          <Login setToken={setToken} />
        </div>
        <div className='cell large-6 medium-12'>
          <Register />
        </div>
      </div>
      <div className='gasper'>Gasper</div>
    </div>
  );
} 

export default SignIn;