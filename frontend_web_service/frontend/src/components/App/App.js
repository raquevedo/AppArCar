import React from 'react';
import './App.css';
import { useLocation, BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Homepage from '../Homepage/Homepage';
import SignIn from '../SignIn/SignIn';
import DashboardWrapper from '../Dashboard/DashboardWrapper';
import Navbar from '../Shared/Navbar';

function App() {
  return (
    <BrowserRouter>
      <div className='grid-y'>
        <div className='cell small-12'>
          <Navbar />
        </div>
        <div className='cell'>
            <Routes>
              <Route path='/' element={<Homepage />} />
              <Route path='signin' element={<SignIn />} />
              <Route
                path='dashboard/*'
                element={
                  <RequireAuth>
                    <DashboardWrapper />
                  </RequireAuth>
                }
              />
            </Routes>
        </div>
      </div>
    </BrowserRouter>
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
