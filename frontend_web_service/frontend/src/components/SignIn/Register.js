import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import NoticeModal from "../Shared/NoticeModal";

async function registerUser(credentials) {
  return fetch("http://localhost:8000/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

const schema = yup.object({
  email: yup
    .string()
    .required()
    .matches("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"),
  username: yup.string().required().matches("^(.{0,4})(.*)$"),
  password: yup.string().required().matches("^(.{8})(.*)$"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match"),
});

export default function Register() {
  const [showModal, setShowModal] = useState(false);
  let modalHeader = "Error";
  let modalBody = "There was an unknown error when processing the request.";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const email = data.email;
    const username = data.username;
    const password = data.password;
    const res = await registerUser({
      email,
      username,
      password,
    });
    if (res.status === "200") {
      modalHeader = "Success";
      modalBody = "Account successfully registered";
      reset({
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
      });
    }
    setShowModal(true);
  };

  return (
    <div className="login-box">
      <h1 className="text-form">Register</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="user-box">
          <label>Email</label>
          <input type="text" {...register("email")} />
        </div>
        {errors.email && <p>Email is invalid</p>}
        <div class="user-box">
          <label>Username</label>
          <input type="text" {...register("username")} />
        </div>
        {errors.username && <p>Username is invalid</p>}
        <div class="user-box">
          <label>Password</label>
          <input type="password" {...register("password")} />
        </div>
        {errors.password && <p>Password is invalid</p>}
        <div class="user-box">
          <label>Confirm Password</label>
          <input type="password" {...register("confirmPassword")} />
        </div>
        {errors.confirmPassword && <p>Password doesn't match</p>}
        <div>
          <button className="bn632-hover bn24" type="submit">
            Register
          </button>
        </div>
      </form>
      {showModal && (
        <NoticeModal
          header={modalHeader}
          body={modalBody}
          setShowModal={setShowModal}
        />
      )}
    </div>
  );
}
