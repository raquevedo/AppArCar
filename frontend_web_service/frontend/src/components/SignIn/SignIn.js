import React from 'react';
import Login from './Login';
import Register from './Register';
import useToken from '../../utils/useToken';
import { Navigate, useLocation } from 'react-router-dom';

function SignIn(props) {
  let location = useLocation();
  const { setToken } = useToken();
  /* Checks if the user is already logged in and redirects to dashboard */
  if(sessionStorage.getItem('token')) {
    return <Navigate to="/dashboard" state={{ from: location }} replace />;
  }
  return (
    <div className='dark-background'>
      <div className='grid-container'>
        <div className='grid-x grid-margin-x grid-padding-x grid-padding-y'>
          <div className='cell large-6 medium-12'>
            <Login setToken={setToken} setUserLoggedIn={props.setUserLoggedIn}/>
          </div>
          <div className='cell large-6 medium-12'>
            <Register />
          </div>
        </div>
      </div>
    </div>
  );
} 

export default SignIn;