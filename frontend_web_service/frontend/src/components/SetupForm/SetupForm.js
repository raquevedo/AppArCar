import React, { useState } from 'react';

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
  const [businessName, setBusinessName] = useState();
  const [cuit, setCuit] = useState();
  const [streetName, setStreetName] = useState();
  const [streetNumber, setStreetNumber] = useState();
  const [phoneNumber, setPhoneNumber] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const partner = await registerUser({
      businessName,
      cuit,
      streetName,
      streetNumber,
      phoneNumber
    });
    setIsRegistered(true);
    setPartnerData(partner);
  }

  return(
    <div className="setup-wrapper">
      <div class='grid-container'>
        <div class='grid-y'>
          <div className='cell shrink'>
            <div className='grid-x align-center'>
              <div className='cell shrink'>
                <h1>Tell us about you</h1>
              </div>
            </div>
            
          </div>
          <div className='cell'>
            <div className='grid-x align-center'>
              <div className='cell small-8'>
                <form onSubmit={handleSubmit}>
                  <label>
                    <p>businessName</p>
                    <input type="text" onChange={e => setBusinessName(e.target.value)}/>
                  </label>
                  <label>
                    <p>CUIT</p>
                    <input type="text" onChange={e => setCuit(e.target.value)}/>
                  </label>
                  <label>
                    <p>Street Name</p>
                    <input type="text" onChange={e => setStreetName(e.target.value)}/>
                  </label>
                  <label>
                    <p>Street Number</p>
                    <input type="text" onChange={e => setStreetNumber(e.target.value)}/>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}