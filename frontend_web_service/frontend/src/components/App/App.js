import React from 'react';
import './App.css';
import { useLocation, BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Homepage from '../Homepage/Homepage';
import SignIn from '../SignIn/SignIn';
import DashboardWrapper from '../DashboardWrapper/DashboardWrapper';
import Profile from '../Profile/Profile';
import Navbar from '../Navbar/Navbar';

function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='signin' element={<SignIn />} />
          <Route
            path='/dashboard/*'
            element={
              <RequireAuth>
                <DashboardWrapper />
              </RequireAuth>
            }
          />
          <Route
            path='/profile/*'
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function RequireAuth({ children }) {
  let location = useLocation();

  if(sessionStorage.getItem('token')) {
    return children;
  }
  return <Navigate to="/signin" state={{ from: location }} replace />;
}

export default App;
