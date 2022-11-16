import React from 'react';
import ParkingList from './ParkingList';
import { Route, Routes } from 'react-router-dom';
import Profile from '../Profile/Profile';
import SideNav from '../Shared/SideNav';
import ManagementBoard from '../Management/ManagementBoard';
import HistoryView from '../PaymentHistory/HistoryView';

export default function Dashboard(showSideNav) {
  return(
    <div>
      {showSideNav['showSideNav'] &&
        <SideNav />
      }
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
  );

}