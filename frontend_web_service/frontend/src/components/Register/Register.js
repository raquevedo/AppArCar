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
  const [passwordConfirmation, setPasswordconfirmation] = useState();
  const [usernameCorrect,setUsernamecorrect] = useState(false);
  const [passwordConfirmationcorrect,setpasswordConfirmationcorrect] = useState(false)
  const [passwordCorrect,setPasswordcorrect] = useState(false);
  const [emailCorrect,setEmailcorrect] = useState(false);
  const [failAlert,setFailalert] = useState(false);
  
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
      setFailalert(true);
    }
  }
  
  function changePasswordconfirmation(element){
    
    if((password != passwordConfirmation) && (passwordConfirmation != null)){
      setpasswordConfirmationcorrect(false);
      element.id = 'not-approved';
      
    }
  }
  return(
    <div className="login-wrapper">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Email</p>
          <input className='emailr' type="text" onChange={e => setEmail(e.target.value)} onFocus = {() => document.getElementsByClassName('emailr')[0].id = 'typing'} onBlur = {() => validateEmail(email,setEmailcorrect,document.getElementsByClassName('emailr')[0])}/>
        </label>
        <label>
          <p>Username</p>
          <input className='username' type="text" onChange={e => setUsername(e.target.value)} onFocus = {() => document.getElementsByClassName('username')[0].id = 'typing'} onBlur = {() => validateUsername(username,setUsernamecorrect,document.getElementsByClassName('username')[0])}/>
        </label>
        <label>
          <p>Password</p>
          <input className='passwordr' type="password" onChange={e => setPassword(e.target.value)} onFocus = {() => document.getElementsByClassName('passwordr')[0].id = 'typing'} onBlur = {() => {validatePassword(password,setPasswordcorrect,document.getElementsByClassName('passwordr')[0]);changePasswordconfirmation(document.getElementsByClassName('passwordconfirmation')[0])}}/>
        </label>
        <label>
          <p>Confirm Password</p>
          <input className='passwordconfirmation' type="password" onChange={e => setPasswordconfirmation(e.target.value)} onFocus = {() => document.getElementsByClassName('passwordconfirmation')[0].id = 'typing'} onBlur = {() => validatePasswordconfirmation(password,passwordConfirmation,setpasswordConfirmationcorrect,document.getElementsByClassName('passwordconfirmation')[0])}/>
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