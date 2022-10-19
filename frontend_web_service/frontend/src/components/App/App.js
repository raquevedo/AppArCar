import React from 'react';
import './App.css';
import { useLocation, BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Homepage from '../Homepage/Homepage';
import DashboardWrapper from '../DashboardWrapper/DashboardWrapper';
import Navbar from '../Navbar/Navbar';
import Lobby from '../Lobby/Lobby';


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
              <Route path='signin' element={<Lobby />} />
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
