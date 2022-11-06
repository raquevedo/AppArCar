import React, { useState, useEffect } from 'react';
import Dashboard from './Dashboard';
import ProfileSetup from './ProfileSetup';
import { getPartnerData }  from '../../controllers/usersController';

export default function DashboardWrapper() {
  const [isRegistered, setIsRegistered] = useState();
  const [partnerData, setPartnerData] = useState({});

  async function assignPartnerData() {
    const partner = await getPartnerData();
    setIsRegistered(partner['isRegister']);
    setPartnerData(partner['data'])
  }

  useEffect(() => {
    assignPartnerData();
  }, [])

  return(
    <div>
      {isRegistered && <Dashboard partnerData={partnerData}/>}
      {isRegistered === false && <ProfileSetup setIsRegistered={setIsRegistered}/>}
    </div>
  );
}