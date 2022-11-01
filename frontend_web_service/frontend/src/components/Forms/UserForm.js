import React, { useState } from 'react';
import { registerUser, updateUser } from '../../controllers/usersController';
import { get } from '../../utils/dictGet';

export default function UserForm({ setIsRegistered, values, buttonText, newUser }) {
  if (values === undefined) {
    values = {};
  }
  if (buttonText === undefined) {
    buttonText = 'Submit';
  }
  if (newUser === undefined) {
    newUser = false;
  }

  const [businessName, setBusinessName] = useState(get(values, 'businessName', ''));
  const [cuitNumber, setCuitNumber] = useState(values['cuitNumber'] ?? '');
  const [streetName, setStreetName] = useState(values['streetName'] ?? '');
  const [streetNumber, setStreetNumber] = useState(values['streetNumber'] ?? '');
  const [contactNumber, setContactNumber] = useState(values['contactNumber'] ?? '');

  const handleSubmit = async e => {
    e.preventDefault();
    if (newUser) {
      await registerUser({
        businessName,
        cuitNumber,
        streetName,
        streetNumber,
        contactNumber
      });
    } else {
      await updateUser({
        businessName,
        cuitNumber,
        streetName,
        streetNumber,
        contactNumber
      });
    }
    
    if (!(setIsRegistered === undefined)) {
      setIsRegistered(true);
    }
  }

  return(
    <form onSubmit={handleSubmit}>
      <div className="user-box">
          <input type="text" value={businessName} placeholder="Business Name" onChange={e => setBusinessName(e.target.value)} />
        </div>
        <div className="user-box">
          <input type="text" value={cuitNumber} placeholder="CUIT" onChange={e => setCuitNumber(e.target.value)} />
        </div>
        <div className="user-box">
          <input type="text" value={streetName} placeholder="Street Name" onChange={e => setStreetName(e.target.value)} />
        </div>
        <div className="user-box">
          <input type="text" value={streetNumber} placeholder="Street Number" onChange={e => setStreetNumber(parseInt(e.target.value))} />
        </div>
        <div className="user-box">
          <input type="text" value={contactNumber} placeholder="Phone Number" onChange={e => setContactNumber(parseInt(e.target.value))} />
        </div>
      
      <div>
        <button type="submit" className="bn632-hover bn24">{buttonText}</button>
      </div>
    </form>
  );
}