import UserForm from '../Forms/UserForm';
import React, { useState, useEffect} from 'react';
import { getParkingUser } from '../../controllers/usersController';

export default function Profile() {
  
  const [userData, setUserData] = useState();
  console.log(userData)
  
  useEffect(() => {
    async function assignProfileData() {
      let response = await getParkingUser();
      if (response.status === 200) {
        let userData = await response.json();
        setUserData(userData);
      }
    }
    assignProfileData();
  }, [])
  
  if (userData === undefined) {
    return(
      <div>Loading</div>
    );
  } else {
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
  }