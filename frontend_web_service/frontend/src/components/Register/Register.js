import React, { useState } from 'react';
import '../../components/App/App.css';
import {validateEmail, validatePassword, validateUsername, validatePasswordconfirmation} from '../../utils/ValidateInputs';
import {alertFail} from '../../components/AlertFail/AlertFail';

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
          <input id={emailCorrect ? 'approved' : 'not-approved'} type="text" onChange={e => setEmail(e.target.value)} onKeyUp={() => {setEmailCorrect(validateEmail(email))}}/>
        </label>
        <label>
          <p>Username</p>
          <input id={usernameCorrect ? 'approved' : 'not-approved'} type="text" onChange={e => setUsername(e.target.value)} onKeyUp={() => {setUsernameCorrect(validateUsername(username))}}/>
        </label>
        <label>
          <p>Password</p>
          <input id={passwordCorrect ? 'approved' : 'not-approved'} type="password" onChange={e => setPassword(e.target.value)} onKeyUp={() => {setPasswordCorrect(validatePassword(password))}}/>
        </label>
        <label>
          <p>Confirm Password</p>
          <input className='ConfirmPassword' id={passwordConfirmationCorrect ? 'approved' : 'not-approved'} type="password" onChange={e => setPasswordConfirmation(e.target.value)} onKeyUp={() => {setPasswordConfirmationCorrect(validatePasswordconfirmation(password,passwordConfirmation))}}/>
        </label>
        <div>
          <button type="submit" class="button">Submit</button>
        </div>
      </form>
      {alertFail(failalert)}
    </div>
  );
}