import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import loginService from './services/login';

const App = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  const handleLogin = async (event) => {
    event.preventDefault()
    try{
      const user = await loginService.login({username, password})
      setUser(user)
      setUsername('')
      setPassword('')
    }catch(e){
      setErrorMessage('Wrong credentials')
      setTimeout( () => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  const renderLoginForm = () => {
    return (
    <form onSubmit={handleLogin}>
        <div>
          <input 
          type= 'text' 
          value={username} 
          name='Username' 
          placeholder='Username' 
          onChange={ ({target}) => setUsername(target.value)}></input>
        </div>
        <div>
          <input 
          type= 'password' 
          value={password} 
          name='password' 
          placeholder='Password' 
          onChange={ ({target}) => setPassword(target.value)}></input>
        </div>
        <button>
          Login
        </button>
      </form>
      )
  }

  const renderInit = () => {
    return(
    <h1> INICIASTE SESION</h1>
    )
  }

  return (

    <div>
      <h1>AppArCar</h1>
      {
        user
        ? renderInit()
        : renderLoginForm()
      }
      
    </div>
  )
}

export default App;
