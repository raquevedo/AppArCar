import React from 'react';
import UserForm from '../Forms/UserForm';

export default function ProfileSetup({ setIsRegistered }) {
  return(
    <div className="setup-wrapper">
      <div className='grid-container main'>
        <div className='grid-y profile-box grid-margin-y grid-padding-y'>
          <div className='cell shrink'>
            <div className='grid-x align-center'>
              <div className='cell shrink'>
                <h1 className="text-form">Tell us about you</h1>
              </div>
            </div>
          </div>
          <div className='cell'>
            <div className='grid-x align-center'>
              <div className='cell small-8'>
                <UserForm setIsRegistered={setIsRegistered} newUser={true}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}