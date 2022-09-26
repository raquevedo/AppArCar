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
  const [passwordconfirmation, setPasswordConfirmation] = useState();
  const [usernamecorrect,setUsernameCorrect] = useState(false);
  const [passwordconfirmationcorrect,setPasswordConfirmationCorrect] = useState(false)
  const [passwordcorrect,setPasswordCorrect] = useState(false);
  const [emailcorrect,setEmailCorrect] = useState(false);
  const [failalert,setFailAlert] = useState(false);
  
 const handleSubmit = async e => {
    e.preventDefault();
    
     if(passwordcorrect && emailcorrect && usernamecorrect && passwordconfirmationcorrect){
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
    
    if((password != passwordconfirmation) && (passwordconfirmation != null)){
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
          <input className='emailr' type="text" onChange={e => setEmail(e.target.value)} onFocus = {() => document.getElementsByClassName('emailr')[0].id = 'typing'} onBlur = {() => validateEmail(email,setEmailCorrect,document.getElementsByClassName('emailr')[0])}/>
        </label>
        <label>
          <p>Username</p>
          <input className='username' type="text" onChange={e => setUsername(e.target.value)} onFocus = {() => document.getElementsByClassName('username')[0].id = 'typing'} onBlur = {() => validateUsername(username,setUsernameCorrect,document.getElementsByClassName('username')[0])}/>
        </label>
        <label>
          <p>Password</p>
          <input className='passwordr' type="password" onChange={e => setPassword(e.target.value)} onFocus = {() => document.getElementsByClassName('passwordr')[0].id = 'typing'} onBlur = {() => {validatePassword(password,setPasswordCorrect,document.getElementsByClassName('passwordr')[0]);changePasswordconfirmation(document.getElementsByClassName('passwordconfirmation')[0])}}/>
        </label>
        <label>
          <p>Confirm Password</p>
          <input className='passwordconfirmation' type="password" onChange={e => setPasswordConfirmation(e.target.value)} onFocus = {() => document.getElementsByClassName('passwordconfirmation')[0].id = 'typing'} onBlur = {() => validatePasswordconfirmation(password,passwordconfirmation,setPasswordConfirmationCorrect,document.getElementsByClassName('passwordconfirmation')[0])}/>
        </label>
        <div>
          <button type="submit" class="button">Submit</button>
        </div>
      </form>
      <AlertFail
        failAlert = {failalert}
      />
    </div>
  );
}