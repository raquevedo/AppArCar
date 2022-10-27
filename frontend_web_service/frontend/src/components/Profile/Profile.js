import React, { useState, useEffect } from 'react';
import { getPartnerData,getParkingData } from '../../controllers/usersController';
import UserForm from '../Forms/UserForm';

export default function Profile() {
  //const [partnerData, setPartnerData] = useState({});
  const [parkingData, setParkingData] = useState({});

  useEffect(() => {
    
    async function assignParkingData() {
        const parking = await getParkingData();
        setParkingData(parking['data'])
      }
      assignParkingData();
  }, [])

  console.log()
  return(
    <div className='grid-container'>
      <div className='grid-y login-box'>
        <div className='cell'>
          <h1 className="text-form">Profile</h1>
        </div>
        <div className='cell'>
          <UserForm values={parkingData} buttonText={'Update'}/>
        </div>
      </div>
    </div>
  );
}