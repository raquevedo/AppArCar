import React, { useState, useEffect } from 'react';
import Dashboard from './Dashboard';
import ProfileSetup from './ProfileSetup';
import { getPartnerData }  from '../../controllers/usersController';

export default function DashboardWrapper(showSideNav) {
  const [isRegistered, setIsRegistered] = useState();

  async function assignPartnerData() {
    const partner = await getPartnerData();
    setIsRegistered(partner['isRegister']);
  }

  useEffect(() => {
    assignPartnerData();
  }, [])

  return(
    <div>
      {isRegistered && <Dashboard showSideNav={showSideNav['showSideNav']}/>}
      {isRegistered === false && <ProfileSetup setIsRegistered={setIsRegistered}/>}
    </div>
  );
}