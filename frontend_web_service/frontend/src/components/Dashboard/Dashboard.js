import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Profile from '../Profile/Profile';

export default function Dashboard({ partnerData, setPartnerData }) {
  return(
    <div className="wrapper">
      <Routes>
        <Route path='/dashboard/profile'
          element={
            <Profile />
          }
        />
      </Routes>
    </div>
  );
}