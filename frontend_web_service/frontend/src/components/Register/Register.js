import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

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

const schema = yup.object({
  email: yup.string().required().matches('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'),
  username: yup.string().required().matches('^(.{0,4})(.*)$'),
  password: yup.string().required().matches('^(.{0,8})(.*)$'),
  confirmPassword: yup.string().test(
    'passwords-match', 'Passwords must match', function(value){
      return this.parent.password === value
  })
})

export default function Register() {
  const { register, handleSubmit, formState:{ errors } } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data) => {
    const email = data.email
    const username = data.username
    const password = data.password
    await registerUser({
      email,
      username,
      password
    });
  }

  return(
    <div className="login-wrapper">
      <h1>Register</h1>
      <form onSubmit={handleSubmit(onSubmit)}>

        <label>Email</label>
        <input type="text" {
          ...register("email")
          }
        />
        <p>{errors.email?.message}</p>

        <label>Username</label>
        <input type="text" {
          ...register("username")
        }
        />
        <p>{errors.username?.message}</p>

        <label>Password</label>
        <input type="password"{
          ...register("password")
        }/>
        <p>{errors.password?.message}</p>

        <label>Confirm Password</label>
        <input type="password"{
          ...register("confirmPassword")
        }/>
        <p>{errors.password?.message}</p>

        <button className="button" type="submit">Register</button>
      </form>
    </div>
  );
}