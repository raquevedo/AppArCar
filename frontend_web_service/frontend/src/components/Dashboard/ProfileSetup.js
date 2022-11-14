import React from 'react';
import UserForm from '../Forms/UserForm';

export default function ProfileSetup({ setIsRegistered }) {
  return(
    <div className="setup-wrapper">
      <h1 className="text-form">Tell us about you</h1>
      <UserForm setIsRegistered={setIsRegistered} newUser={true}/>
    </div>
  );
}