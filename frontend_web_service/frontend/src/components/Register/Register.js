import React, { useState } from 'react';
import '../../components/App/App.css';
import {validateEmail, validatePassword, validateUsername, validatePasswordConfirmation} from '../../utils/ValidateInputs';
import AlertFail from '../../components/AlertFail/AlertFail';

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
  const [failAlert,setFailAlert] = useState(false);
  
 const handleSubmit = async e => {
    e.preventDefault();
    
     if(passwordCorrect && emailCorrect && usernameCorrect && passwordConfirmationCorrect){
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
  
  function changePasswordConfirmation(element){
    
    if((password != passwordConfirmation) && (passwordConfirmation != null)){
      setPasswordConfirmationCorrect(false);
      element.id = 'not-approved';
      
    }
  }
  return(
    <div className="login-wrapper">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Email</p>
          <input className='email-register' type="text" onChange={e => setEmail(e.target.value)} onFocus = {() => document.getElementsByClassName('email-register')[0].id = 'typing'} onBlur = {() => validateEmail(email,setEmailCorrect,document.getElementsByClassName('email-register')[0])}/>
        </label>
        <label>
          <p>Username</p>
          <input className='username' type="text" onChange={e => setUsername(e.target.value)} onFocus = {() => document.getElementsByClassName('username')[0].id = 'typing'} onBlur = {() => validateUsername(username,setUsernameCorrect,document.getElementsByClassName('username')[0])}/>
        </label>
        <label>
          <p>Password</p>
          <input className='password-register' type="password" onChange={e => setPassword(e.target.value)} onFocus = {() => document.getElementsByClassName('password-register')[0].id = 'typing'} onBlur = {() => {validatePassword(password,setPasswordCorrect,document.getElementsByClassName('password-register')[0]);changePasswordConfirmation(document.getElementsByClassName('password-confirmation')[0])}}/>
        </label>
        <label>
          <p>Confirm Password</p>
          <input className='password-confirmation' type="password" onChange={e => setPasswordConfirmation(e.target.value)} onFocus = {() => document.getElementsByClassName('password-confirmation')[0].id = 'typing'} onBlur = {() => validatePasswordConfirmation(password,passwordConfirmation,setPasswordConfirmationCorrect,document.getElementsByClassName('password-confirmation')[0])}/>
        </label>
        <div>
          <button type="submit" class="button">Submit</button>
        </div>
      </form>
      <AlertFail
        failAlert = {failAlert}
      />
    </div>
  );
}