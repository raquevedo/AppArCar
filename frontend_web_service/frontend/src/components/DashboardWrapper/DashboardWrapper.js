import React, { useState } from 'react';
import Dashboard from '../Dashboard/Dashboard';
import SetupForm from '../SetupForm/SetupForm';
import { getPartnerData }  from '../../controllers/usersController';

export default function DashboardWrapper() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [partnerData, setPartnerData] = useState({});

  const partner = getPartnerData().then(partner => {
    return partner;
  });
  
  const checkIsRegistered = () => {
    partner.then((partner) => {
      console.log(partner);
      if (partner['isRegister']) {
        setIsRegistered(true);
        setPartnerData(partner['data'])
      }
    })
  }

  if (isRegistered == false) {
    checkIsRegistered()
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