import React, { useState } from 'react';
import ValidatePassword from '../../utils/ValidatePassword';
import ValidateEmail from '../../utils/ValidateEmail';
import ValidateUsername from '../../utils/ValidateUsername';
import ValidatePasswordConfirmation from '../../utils/ValidatePasswordConfirmation';

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
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState();
  const [usernameCorrect,setUsernameCorrect] = useState(false);
  const [passwordConfirmationCorrect,setPasswordConfirmationCorrect] = useState(false)
  const [passwordCorrect,setPasswordCorrect] = useState(false);
  const [emailCorrect,setEmailCorrect] = useState(false);
 
  
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
      alert('Missing fields to complete')
    }
  }

  return(
    <div className="login-wrapper">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Email</p>
          <input type="text" onChange={e => setEmail(e.target.value)}  onBlur = {() => {setEmailCorrect(ValidateEmail(email))}}/>
        </label>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUsername(e.target.value)}  onBlur = {() =>{setUsernameCorrect(ValidateUsername(username))}}/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)} onBlur = {() => {setPasswordCorrect(ValidatePassword(password))}}/>
        </label>
        <label>
          <p>Confirm Password</p>
          <input type="password"  onChange={e => setPasswordConfirmation(e.target.value)}  onBlur = {() => {setPasswordConfirmationCorrect(ValidatePasswordConfirmation(password,passwordConfirmation))}}/>
        </label>
        <div>
          <button type="button" class="button" onClick={handleSubmit}>Submit</button>
        </div>
      </form>
    </div>
  );
}