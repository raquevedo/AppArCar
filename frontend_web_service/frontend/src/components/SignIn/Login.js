import React, { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { logUserIn } from "../../controllers/authController";

const schema = yup.object({
  email: yup
    .string()
    .required()
    .matches("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"),
  password: yup.string().required().matches("^(.{0,8})(.*)$"),
});

export default function Login({ setToken, setUserLoggedIn }) {
  const [errorMessage, setErrorMessage] = useState('');

  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: "onTouched",
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const email = data.email;
    const password = data.password;
    let resp = await logUserIn({
      email,
      password,
    });
    if (resp.status === 200) {
      let data = await resp.json();
      setToken(data);
      setUserLoggedIn(true);
      navigate("/dashboard");
    } else if (resp.status === 401) {
      setErrorMessage('Invalid username/password');
    } else {
      console.log('Error contacting auth service');
      setErrorMessage('Unexpected error');
    }
  };

  return (
    <div className="login-wrapper with-shadow" id='login'>
      <h1 className="signin-header">Log In</h1>
      <p id="is-required-text">* Required</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-fields">

          <div>
            <input type="text" placeholder="Email *" {...register("email")} />
          </div>
          {errors.email && <p className="error-text">Email is invalid</p>}

          <div>
            <input
              type="password"
              placeholder="Password *"
              {...register("password")}
            />
          </div>
          {errors.password && <p className="error-text">Password is invalid</p>}

        </div>
        <button className="signin-button" type="submit">
          Login
        </button>
        <p className="error-text">{ errorMessage }</p>
      </form>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
