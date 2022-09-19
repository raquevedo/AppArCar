import React, { useState } from 'react';
import ValidationInputsPassword from '../../utils/ValidationInputsPassword';
import ValidationInputsEmail from '../../utils/ValidationInputsEmail';
import ValidationInputsUsername from '../../utils/ValidationInputsUsername';
import ValidationInputsPasswordConfirmation from '../../utils/ValidationInputsPasswordConfirmation';

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
  const [UsernameCorrect,setUsernameCorrect] = useState(false);
  const [PasswordConfirmationCorrect,setPasswordConfirmationCorrect] = useState(false)
  const [PasswordCorrect,setPasswordCorrect] = useState(false);
  const [EmailCorrect,setEmailCorrect] = useState(false);
  let passwordlenght = 0;
  const handleSubmit = async e => {
    e.preventDefault();
    
     if((PasswordCorrect == true) && (EmailCorrect == true) && (UsernameCorrect == true) && (PasswordConfirmationCorrect == true)){
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

passwordlenght = password.length;

//console.log(EmailCorrect);
//console.log(UsernameCorrect)
// console.log(PasswordCorrect);
// console.log(PasswordConfirmationCorrect);
return(
    <div className="login-wrapper">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Email</p>
          <input type="text" onChange={e => setEmail(e.target.value)}  onBlur = {() => {setEmailCorrect(ValidationInputsEmail(email))}}/>
        </label>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUsername(e.target.value)}  onBlur = {() =>{setUsernameCorrect(ValidationInputsUsername(username))}}/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)} onBlur = {() => {setPasswordCorrect(ValidationInputsPassword(password,passwordlenght))}}/>
        </label>
        <label>
          <p>Confirm Password</p>
          <input type="password"  onChange={e => setPasswordConfirmation(e.target.value)}  onBlur = {() => {setPasswordConfirmationCorrect(ValidationInputsPasswordConfirmation(passwordConfirmation))}}/>
        </label>
        <div>
          <button type="button" class="button" onClick={handleSubmit}>Submit</button>
        </div>
      </form>
    </div>
  );
}