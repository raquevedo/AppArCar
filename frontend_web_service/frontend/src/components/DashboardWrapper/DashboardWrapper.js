import React, { useState, useEffect } from 'react';
import Dashboard from '../Dashboard/Dashboard';
import ProfileSetup from '../ProfileSetup/ProfileSetup';
import { getPartnerData }  from '../../controllers/usersController';

export default function DashboardWrapper() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [partnerData, setPartnerData] = useState({});

  useEffect(() => {
    async function assignPartnerData() {
      const partner = await getPartnerData();
      setIsRegistered(partner['isRegister']);
      setPartnerData(partner['data'])
    }
    assignPartnerData();
  }, [])

  return(
    <div>
      {isRegistered
        ? <Dashboard partnerData={partnerData}/>
        : <ProfileSetup setIsRegistered={setIsRegistered}/>
      }
    </div>
  );
}