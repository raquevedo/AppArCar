import React, { useState } from 'react';
import Dashboard from '../Dashboard/Dashboard';
import SetupForm from '../SetupForm/SetupForm';
import fetchToken from '../../utils/fetchToken';

async function getPartnerData() {
  let myHeaders = new Headers();
  myHeaders.append('Authorization', 'Bearer ' + fetchToken());
  myHeaders.append('Content-Type', 'application/json');

  let response = await fetch('http://0.0.0.0:8000/user/partners/user-info', {
    method: 'GET',
    headers: myHeaders
  });
  response = await response.json();
  return response
}

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
  checkIsRegistered()

  return(
    <div>
      {isRegistered
        ? <Dashboard partnerData={partnerData} setPartnerData={setPartnerData}/>
        : <SetupForm setPartnerData={setPartnerData} setIsRegistered={setIsRegistered}/>
      }
    </div>
  );
}