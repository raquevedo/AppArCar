import React, { useState, useEffect } from 'react';
import Dashboard from './Dashboard';
import ProfileSetup from './ProfileSetup';
import { getParkingUser }  from '../../controllers/usersController';

export default function DashboardWrapper() {
  const [isRegistered, setIsRegistered] = useState();

  useEffect(() => {
    async function assignParkingData() {
      let response = await getParkingUser();
      if (response.status === 200) {
        let user = await response.json();
        setIsRegistered(user['isRegister']);
      }
    }
    assignParkingData();
  }, [])

  return(
    <div>
      {isRegistered && <Dashboard />}
      {isRegistered === false && <ProfileSetup setIsRegistered={setIsRegistered}/>}
    </div>
  );
}