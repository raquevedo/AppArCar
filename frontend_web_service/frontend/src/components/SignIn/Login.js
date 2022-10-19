import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

async function loginUser(credentials) {

  return fetch('http://localhost:8000/auth/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
}

const schema = yup.object({
  email: yup.string().required().matches('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
  password: yup.string().required().matches('^(.{0,8})(.*)$'),
})

export default function Login({ setToken }) {
  const { register, handleSubmit, formState:{ errors } } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(schema)
  });
 
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const email = data.email;
    const password = data.password;
    const token = await loginUser({
      email,
      password
    });
    setToken(token);
    navigate('/dashboard');
  }

  return(
    <div className="login-wrapper">
      <h1>Log In</h1>
      <form onSubmit={handleSubmit(onSubmit)}>

        <label>Email</label>
        <input type="text" {
          ...register("email")
          }
        />
        { errors.email && <p>Email is invalid</p> }

        <label>Password</label>
        <input type="password"{
          ...register("password")
          }
        />
        { errors.password && <p>Password is invalid</p> }

        <button className="button" type="submit">Login</button>
      </form>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}