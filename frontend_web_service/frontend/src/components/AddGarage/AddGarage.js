import React, { useState } from 'react';
import fetchToken from '../../utils/fetchToken';
import PopUp from '../PopUp/PopUp';

async function registerUser(partnerData) {
    let myHeaders = new Headers();
    myHeaders.append('Authorization', 'Bearer ' + fetchToken());
    myHeaders.append('Content-Type', 'application/json');

    return fetch('http://0.0.0.0:8000/user/partners/create-user', {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(partnerData)
      })
        .then(data => data.json())
    }

export default function AddGarageForm({ setPartnerData, setIsRegistered}) {
    const [GarageName, setGarageName] = useState();
    const [cuitNumber, setCuitNumber] = useState();
    const [streetName, setStreetName] = useState();
    const [streetNumber, setStreetNumber] = useState();
    const [contactNumber, setContactNumber] = useState();
  
    const handleSubmit = async e => {
      e.preventDefault();
      const partner = await registerUser({
        GarageName,
        cuitNumber,
        streetName,
        streetNumber,
        contactNumber
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
                  <h1>Add Your Garage</h1>
                </div>
              </div>
              
            </div>
            <div className='cell'>
              <div className='grid-x align-center'>
                <div className='cell small-8'>
                  <form onSubmit={handleSubmit}>
                    <label>
                      <p>Garage Name</p>
                      <input type="text" onChange={e => setGarageName(e.target.value)}/>
                    </label>
                    <label>
                      <p>CUIT</p>
                      <input type="text" onChange={e => setCuitNumber(e.target.value)}/>
                    </label>
                    <label>
                      <p>Street Name</p>
                      <input type="text" onChange={e => setStreetName(e.target.value)}/>
                    </label>
                    <label>
                      <p>Street Number</p>
                      <input type="text" onChange={e => setStreetNumber(parseInt(e.target.value))}/>
                    </label>
                    <label>
                      <p>Phone Number</p>
                      <input type="text" onChange={e => setContactNumber(parseInt(e.target.value))} />
                    </label>
                    <div>
                      <button type="submit" class="button" > Add Garage</button>
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