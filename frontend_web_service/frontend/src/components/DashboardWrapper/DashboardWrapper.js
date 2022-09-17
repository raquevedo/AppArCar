import React, { useState } from 'react';
import Dashboard from '../Dashboard/Dashboard';
import SetupForm from '../SetupForm/SetupForm';

async function getPartnerData() {
  fetch('https://0.0.0.0:8000/user/partners/user-info')
  return await response.json();
}

export default function DashboardWrapper() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [partnerData, setPartnerData] = useState({});

  const partner = getPartnerData();
  if (partner['isRegistered']) {
    setIsRegistered(true);
    setPartnerData(partner['data'])
  }

  return(
    <div>
      {isRegistered
        ? <Dashboard partnerData={partnerData} setPartnerData={setPartnerData}/>
        : <SetupForm setPartnerData={setPartnerData} setIsRegistered={setIsRegistered}/>
      }
    </div>
  );
}