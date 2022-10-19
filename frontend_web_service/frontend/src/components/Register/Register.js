import React, { useState } from 'react';

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

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await registerUser({
      email,
      username,
      password
    });
  }

  return(
    <div className="login-box">
      <h1 className="text-form">Register</h1>
      <form onSubmit={handleSubmit}>
       
        <div class="user-box">
          <input type="text" onChange={(e) => setEmail(e.target.value)} />
          <label>Email</label>
        </div>
        <div class="user-box">
          <input type="text" onChange={(e) => setUsername(e.target.value)} />
          <label>Username</label>
        </div>
        <div class="user-box">
          <input type="password" onChange={(e) => setPassword(e.target.value)} />
          <label>Password</label>
        </div>
        <div class="user-box">
          <input type="password" />
          <label>Confirm Password</label>
        </div>
        
        <div>
          <button type="submit" class="bn632-hover bn24">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}