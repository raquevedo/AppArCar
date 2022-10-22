import React, { useState, useEffect } from 'react';
import { getPartnerData } from '../../controllers/usersController';
import UserForm from '../Forms/UserForm';

export default function Profile() {
  const [partnerData, setPartnerData] = useState({});

  useEffect(() => {
    async function assignPartnerData() {
      const partner = await getPartnerData();
      setPartnerData(partner['data'])
    }
    assignPartnerData();
  }, [])

  return(
    <div className='grid-container'>
      <div className='grid-y login-box'>
        <div className='cell'>
          <h1>Profile</h1>
        </div>
        <div className='cell'>
          <UserForm values={partnerData} buttonText={'Update'}/>
        </div>
      </div>
    </div>
  );
}