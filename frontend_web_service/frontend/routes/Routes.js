import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Dashboard from '../pages/ParkingDashboard'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path= "/" component={<Dashboard />}/>
    </Routes>
    </BrowserRouter>
  );
}  
export default App;
