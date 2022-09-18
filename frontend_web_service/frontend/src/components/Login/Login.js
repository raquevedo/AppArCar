import React, { useState } from 'react';
import PropTypes from 'prop-types';

async function loginUser(credentials) {

  return fetch('http://0.0.0.0:8000/auth/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
    .then((data) => {
      console.log(data);
    })
 }

export default function Login({ setToken }) {
 
  const [email, setEmail] = useState();
  const [password, setPassword] = useState('');
  const [passwordConfirmationL,setPasswordConfirmationL] = useState(false);
  const [emailConfirmationL,setemailConfirmationL] = useState(false);
  const EmailRegex = /\S+@\S+\.\S+/;

  const handleSubmit = async e => {
    e.preventDefault();

    if((emailConfirmationL) && (passwordConfirmationL)){
      const token = await loginUser({
        email,
        password
      });
      setToken(token);
    }
  
  }

  function validationLogin(){

    if(EmailRegex.test(email)){
      setemailConfirmationL(!emailConfirmationL);
    }
    else{
      alert('Enter an email with the format example@example.com')
    }

    if((password != '') && (password.length>=8)){
      setPasswordConfirmationL(!passwordConfirmationL);
    }
    else{
      alert('Enter a password with 8 digits or more');
    }

  }

  return(
    <div className="login-wrapper">
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Email</p>
          <input type="text" onChange={e => setEmail(e.target.value)}/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)}/>
        </label>
        <div>
          <button type="button" class="button" onClick={validationLogin}>Submit</button>
        </div>
      </form>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}