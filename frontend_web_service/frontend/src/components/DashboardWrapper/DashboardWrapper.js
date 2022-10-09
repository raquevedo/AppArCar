import React, { useState } from 'react';
import Dashboard from '../Dashboard/Dashboard';
import SetupForm from '../SetupForm/SetupForm';
import fetchToken from '../../utils/fetchToken';

async function getPartnerData() {
  let myHeaders = new Headers();
  myHeaders.append('Authorization', 'Bearer ' + fetchToken());
  myHeaders.append('Content-Type', 'application/json');

  fetch('http://localhost:8000/user/partners/user-info', {
    method: 'GET',
    headers: myHeaders
  }).then((response) => {
      return response.json()
  })
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