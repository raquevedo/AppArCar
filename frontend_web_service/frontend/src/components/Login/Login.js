import React, { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import "./index.css";

async function loginUser(credentials) {
  return fetch("http://0.0.0.0:8000/auth/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function Login({ setToken }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      email,
      password,
    });
    setToken(token);
    navigate("/dashboard");
  };

  return (
    <div className="login-box">
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <div class="user-box">
          <input type="text" onChange={(e) => setEmail(e.target.value)} />
          <label>Username</label>
        </div>
        <div class="user-box">
          <input type="text" onChange={(e) => setPassword(e.target.value)} />
          <label>Password</label>
        </div>
        <div>
          <button type="submit" class="bn632-hover bn24">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
