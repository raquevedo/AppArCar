import React, { useState } from 'react';
import '../../components/App/App.css';
import {validateEmail,validatePassword,validateUsername,validatePasswordconfirmation} from '../../utils/ValidateInputs';
import {alertFail} from '../../utils/AlertFail';

async function registerUser(credentials) {
  return fetch('http://0.0.0.0:8000/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
  .then(data => data.json())
}

export default function Register() {
 
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirmation, setPasswordConfirmation] = useState();
  const [usernameCorrect,setUsernameCorrect] = useState(false);
  const [passwordConfirmationCorrect,setPasswordConfirmationCorrect] = useState(false)
  const [passwordCorrect,setPasswordCorrect] = useState(false);
  const [emailCorrect,setEmailCorrect] = useState(false);
  const [failalert,setFailAlert] = useState(false);
  
 const handleSubmit = async e => {
    e.preventDefault();
    
     if((passwordCorrect) && (emailCorrect) && (usernameCorrect) && (passwordConfirmationCorrect)){
      const token = await registerUser({
        email,
        username,
        password
      });
    }
    else{
      setFailAlert(true);
    }
  }
  
  function changePasswordconfirmation(){
    
    setPasswordCorrect(validatePassword(password))
    
    if((password != passwordConfirmation) && (passwordConfirmation != null)){
      setPasswordConfirmationCorrect(false);
    }
  }
  
  return(
    <div className="login-wrapper">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Email</p>
          <input id={emailCorrect ? 'approved' : 'notapproved'} type="text" onChange={e => setEmail(e.target.value)} onFocus={() =>{setEmailCorrect(false)}} onBlur = {() => {setEmailCorrect(validateEmail(email))}}/>
        </label>
        <label>
          <p>Username</p>
          <input id={usernameCorrect ? 'approved' : 'notapproved'} type="text" onChange={e => setUsername(e.target.value)}  onFocus={() =>{setUsernameCorrect(false)}} onBlur = {() =>{setUsernameCorrect(validateUsername(username))}}/>
        </label>
        <label>
          <p>Password</p>
          <input id={passwordCorrect ? 'approved' : 'notapproved'} type="password" onChange={e => setPassword(e.target.value)} onFocus={() =>{setPasswordCorrect(false)}} onBlur = {() => {changePasswordconfirmation()}}/>
        </label>
        <label>
          <p>Confirm Password</p>
          <input className='ConfirmPassword' id={passwordConfirmationCorrect ? 'approved' : 'notapproved'} type="password"  onChange={e => setPasswordConfirmation(e.target.value)}  onFocus={() =>{setPasswordConfirmationCorrect(false)}} onBlur = {() => {setPasswordConfirmationCorrect(validatePasswordconfirmation(password,passwordConfirmation))}}/>
        </label>
        <div>
          <button type="button" class="button">Submit</button>
        </div>
      </form>
      {alertFail(failalert)}
    </div>
  );
}