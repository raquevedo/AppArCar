import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';


function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}

function App() {
  const token = getToken();

  if(!token) {
    return (
      <div className='wrapper'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />}>
              <Route path='register' element={<Register />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }

  return (
    <div className="wrapper">
      <h1>AppArCar</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />}>
            <Route path='profile' element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
