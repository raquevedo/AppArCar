import React, { useState, useEffect } from 'react';
import Dashboard from './Dashboard';
import ProfileSetup from './ProfileSetup';
import { getParkingUser }  from '../../controllers/usersController';

export default function DashboardWrapper() {
  const [isRegistered, setIsRegistered] = useState();
  const [parkingData, setParkingData] = useState({});

  useEffect(() => {
    
    async function assignParkingData() {
      const partner = await getParkingUser();
      setIsRegistered(partner['isRegister']);
      setParkingData(partner['data'])
    }
    assignParkingData();
  }, [])

  return(
    <div>
      {isRegistered && <Dashboard partnerData={parkingData}/>}
      {isRegistered === false && <ProfileSetup setIsRegistered={setIsRegistered}/>}
    </div>
  );
}