import React, { useState } from 'react';
import '../../components/App/App.css';
import {validateEmail, validatePassword, validateUsername, validatePasswordconfirmation} from '../../utils/ValidateInputs';
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
  const [passwordConfirmationcorrect,setPasswordConfirmationCorrect] = useState(false)
  const [passwordCorrect,setPasswordCorrect] = useState(false);
  const [emailCorrect,setEmailCorrect] = useState(false);
  const [failAlert,setFailAlert] = useState(false);
  
 const handleSubmit = async e => {
    e.preventDefault();
    
     if(passwordCorrect && emailCorrect && usernameCorrect && passwordConfirmationcorrect){
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
  
  function changePasswordconfirmation(element){
    
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
          <input className='emailR' type="text" onChange={e => setEmail(e.target.value)} onFocus = {() => document.getElementsByClassName('emailR')[0].id = 'typing'} onBlur = {() => validateEmail(email,setEmailCorrect,document.getElementsByClassName('emailR')[0])}/>
        </label>
        <label>
          <p>Username</p>
          <input className='username' type="text" onChange={e => setUsername(e.target.value)} onFocus = {() => document.getElementsByClassName('username')[0].id = 'typing'} onBlur = {() => validateUsername(username,setUsernameCorrect,document.getElementsByClassName('username')[0])}/>
        </label>
        <label>
          <p>Password</p>
          <input className='passwordR' type="password" onChange={e => setPassword(e.target.value)} onFocus = {() => document.getElementsByClassName('passwordR')[0].id = 'typing'} onBlur = {() => {validatePassword(password,setPasswordCorrect,document.getElementsByClassName('passwordR')[0]);changePasswordconfirmation(document.getElementsByClassName('passwordconfirmation')[0])}}/>
        </label>
        <label>
          <p>Confirm Password</p>
          <input className='passwordconfirmation' type="password" onChange={e => setPasswordConfirmation(e.target.value)} onFocus = {() => document.getElementsByClassName('passwordconfirmation')[0].id = 'typing'} onBlur = {() => validatePasswordconfirmation(password,passwordConfirmation,setPasswordConfirmationCorrect,document.getElementsByClassName('passwordconfirmation')[0])}/>
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