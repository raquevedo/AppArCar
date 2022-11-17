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
        <div className="setup-wrapper gradient-background">
          <div className='white-background with-shadow' id='profile-form'>
            <h1 className="text-form">Profile</h1>
            <UserForm buttonText={'Update'} valuesData={userData}/>
          </div>
        </div>
      );
    }
  }