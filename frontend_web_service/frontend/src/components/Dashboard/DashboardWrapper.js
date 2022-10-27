import React, { useState, useEffect } from 'react';
import Dashboard from './Dashboard';
import ProfileSetup from './ProfileSetup';
import { getParkingData }  from '../../controllers/usersController';

export default function DashboardWrapper() {
  const [isRegistered, setIsRegistered] = useState();
  const [parkingData, setParkingData] = useState({});

  async function assignParkingData() {
    const partner = await getParkingData();
    setIsRegistered(partner['isRegister']);
    setParkingData(partner['data'])
  }

  useEffect(() => {
    assignParkingData();
  }, [])

  return(
    <div>
      {isRegistered && <Dashboard partnerData={parkingData}/>}
      {isRegistered === false && <ProfileSetup setIsRegistered={setIsRegistered}/>}
    </div>
  );
}