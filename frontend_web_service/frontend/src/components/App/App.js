import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import useToken from '../../utils/useToken';

function App() {
  const { token, setToken } = useToken();

  if(!token) {
    return (
      <div>
        <Login setToken={setToken} />
        <Register />
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
