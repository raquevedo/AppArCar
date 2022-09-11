import React from 'react';

export default function Login() {
  return(
    <div className="login-wrapper">
      <h1>Log In</h1>
      <form>
        <label>
          <p>Email</p>
          <input type="text" />
        </label>
        <label>
          <p>Password</p>
          <input type="password" />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}