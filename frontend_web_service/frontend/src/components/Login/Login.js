import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../components/App/App.css';
import {validateEmail, validatePassword} from '../../utils/ValidateInputs';
import AlertFail from '../../components/AlertFail/AlertFail';
import {useNavigate} from 'react-router-dom';

async function loginUser(credentials) {

  return fetch('http://0.0.0.0:8000/auth/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
  .then(data => data.json())
}

export default function Login({ setToken }) {
 
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [ispasswordvalid,setIsPasswordValid] = useState(false);
  const [isemailvalid,setIsEmailValid] = useState(false);
  const [failalertl,setFailAlertL] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
  
    if (isemailvalid && ispasswordvalid){
      const token = await loginUser({
        email,
        password
      });
      setToken(token);
      navigate('/dashboard');
    }
    else{
      setFailAlertL(true);
    }
  }
  
  return(
    <div className="login-wrapper">
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Email</p>
          <input className='emaill' type="text" onChange={e => {setEmail(e.target.value)}} onFocus={() => document.getElementsByClassName('emaill')[0].id = 'typing'} onBlur={() => validateEmail(email,setIsEmailValid,document.getElementsByClassName('emaill')[0])}/>
        </label>
        <label>
          <p>Password</p>
          <input className='passwordl' type="password" onChange={e => setPassword(e.target.value)} onFocus={() => document.getElementsByClassName('passwordl')[0].id = 'typing'} onBlur={() => validatePassword(password, setIsPasswordValid, document.getElementsByClassName('passwordl')[0])}/>
        </label>
        <div>
          <button type="submit" class="button">Submit</button>
        </div>
      </form>
      <AlertFail
        failAlert = {failalertl}
        />
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}