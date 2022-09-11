import React from 'react';

export default function Register() {
  return(
    <div className="login-wrapper">
      <h1>Log In</h1>
      <form>
        <label>
          <p>Email</p>
          <input type="text" />
        </label>
        <label>
            <p>Username</p>
            <input type="test" />
        </label>
        <label>
          <p>Password</p>
          <input type="password" />
        </label>
        <label>
            <p>Confirm Password</p>
            <input type="password" />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}