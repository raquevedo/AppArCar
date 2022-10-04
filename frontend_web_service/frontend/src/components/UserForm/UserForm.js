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
      <label>
        <p>Business Name</p>
        <input type="text" value={businessName} onChange={e => setBusinessName(e.target.value)}/>
      </label>
      <label>
        <p>CUIT</p>
        <input type="text" value={cuitNumber} onChange={e => setCuitNumber(e.target.value)}/>
      </label>
      <label>
        <p>Street Name</p>
        <input type="text" value={streetName} onChange={e => setStreetName(e.target.value)}/>
      </label>
      <label>
        <p>Street Number</p>
        <input type="text" value={streetNumber} onChange={e => setStreetNumber(parseInt(e.target.value))}/>
      </label>
      <label>
        <p>Phone Number</p>
        <input type="text" value={contactNumber} onChange={e => setContactNumber(parseInt(e.target.value))} />
      </label>
      <div>
        <button type="submit" class="button">{buttonText}</button>
      </div>
    </form>
  );
}