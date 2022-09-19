import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ValidationInputsPassword from '../../utils/ValidationInputsPassword';
import ValidationInputsEmail from '../../utils/ValidationInputsEmail';


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
  let paswordLenghtL = 0;
  

  const handleSubmit = async e => {
    e.preventDefault();

    if((emailConfirmationL) && (passwordConfirmationL)){
      const token = await loginUser({
        email,
        password
      });
      setToken(token);
    }
    else{
      alert('Missing fields to complete')
    }
  
  }



  console.log(emailConfirmationL);
  console.log(passwordConfirmationL);

  paswordLenghtL = password.length;
return(
    <div className="login-wrapper">
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Email</p>
          <input type="text" onChange={e => setEmail(e.target.value)} onBlur = {() => {setemailConfirmationL(ValidationInputsEmail(email))}}/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)} onBlur = {() => {setPasswordConfirmationL(ValidationInputsPassword(password,paswordLenghtL))}}/>
        </label>
        <div>
          <button type="button" class="button" onClick={handleSubmit}>Submit</button>
        </div>
      </form>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}