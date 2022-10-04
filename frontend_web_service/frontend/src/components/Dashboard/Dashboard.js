import React from 'react';
import ParkingList from '../ParkingList/ParkingList';
import { Route, Routes } from 'react-router-dom';
import Profile from '../Profile/Profile';
import SideNav from '../SideNav/SideNav';

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
        </Routes>
      </div>
    </div>
  );
}