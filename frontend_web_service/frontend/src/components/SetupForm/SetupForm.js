import React, { useState } from 'react';
import Select from 'react-select';

async function registerUser(partnerData) {
  return fetch('http://0.0.0.0:8000/user/partner/create-user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(partnerData)
  })
    .then(data => data.json())
}

export default function SetupForm({ setPartnerData, setIsRegistered }) {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [idNumber, setIdNumber] = useState();
  const [gender, setGender] = useState();
  const [phoneNumber, setPhoneNumber] = useState();

  const genderOptions = [
    { value: 'male', label:'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other'}
  ]

  const handleSubmit = async e => {
    e.preventDefault();
    const partner = await registerUser({
      firstName,
      lastName,
      idNumber,
      gender,
      phoneNumber
    });
    setIsRegistered(true);
    setPartnerData(partner);
  }

  return(
    <div className="setup-wrapper">
      <h1>Tell us about you</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>First Name</p>
          <input type="text" onChange={e => setFirstName(e.target.value)}/>
        </label>
        <label>
          <p>Last Name</p>
          <input type="text" onChange={e => setLastName(e.target.value)}/>
        </label>
        <label>
          <p>ID Number</p>
          <input type="text" onChange={e => setIdNumber(e.target.value)}/>
        </label>
        <label>
          <p>Gender</p>
          <Select options={genderOptions} onChange={e => setGender(e.target.value)} />
        </label>
        <label>
          <p>Phone Number</p>
          <input type="text" onChange={e => setPhoneNumber(e.target.value)} />
        </label>
        <div>
          <button type="button" class="button">Submit</button>
        </div>
      </form>
    </div>
  );
}