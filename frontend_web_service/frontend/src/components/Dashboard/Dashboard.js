import React from 'react';
import ParkingList from './ParkingList';
import { Route, Routes } from 'react-router-dom';
import Profile from '../Profile/Profile';
import SideNav from '../Shared/SideNav';

export default function Dashboard({ partnerData }) {
  return(
    <div className='grid-x'>
      <div className='cell small-2'>
        <SideNav />
      </div>
      <div className='cell small-10'>
        <Routes>
          <Route
            path='/'
            element={
              <ParkingList />
            }
          />
          <Route
            path='profile'
            element={
              <Profile />
            }
          />
          <Route
            path='manage/:id'
            element={
              <ManagementDashboard />
            }
          />
        </Routes>
      </div>
    </div>
  );

}