import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ParkingDashboard from '../components/ParkingDashboard'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path= "/" component={<ParkingDashboard />}/>
    </Routes>
    </BrowserRouter>
  );
}  
export default App;
