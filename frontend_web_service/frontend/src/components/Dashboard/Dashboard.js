import React from 'react';
import ParkingList from './ParkingList';
import { Route, Routes } from 'react-router-dom';
import Profile from '../Profile/Profile';
import SideNav from '../Shared/SideNav';
import ManagementBoard from '../Management/ManagementBoard';
import HistoryView from '../PaymentHistory/HistoryView';

export default function Dashboard({ partnerData }) {
  return(
    <div className='grid-x grid-margin-x grid-padding-x'>
      <div className='cell small-2 '>
        <SideNav />
      </div>
      <div className='grid-y grid-margin-x grid-padding-x main small-10 large-8'>
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
            path='manage/:id/:tab/*'
            element={
              <ManagementBoard />
            }
          />
          <Route
            path='manage/:id/*'
            element={
              <ManagementBoard />
            }
          />
          <Route
            path='history'
            element={
              <HistoryView />
            }
          />
        </Routes>
      </div>
    </div>
  );

}