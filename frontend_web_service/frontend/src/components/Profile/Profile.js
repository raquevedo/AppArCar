import UserForm from '../Forms/UserForm';
import React, { useState, useEffect} from 'react';
import { getParkingUser } from '../../controllers/usersController';

export default function Profile() {
  
  const [userData,setUserData] = useState({});
  
  useEffect(() => {
    async function assignParkingData() {
    const parking = await getParkingUser();
      setUserData(parking.data);
    }
    assignParkingData();
    
  }, [])
  
  return(
    <div className='grid-container'>
      <div className='grid-y login-box'>
        <div className='cell'>
          <h1 className="text-form">Profile</h1>
        </div>
        <div className='cell'>
          <UserForm buttonText={'Update'} valuesData={userData}/>
        </div>
      </div>
    </div>
  );
}