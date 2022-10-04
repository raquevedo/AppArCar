import React, { useState } from 'react';
import fetchToken from '../../utils/fetchToken';



async function registerParking(parkingData) {
    let myHeaders = new Headers();
    myHeaders.append('Authorization', 'Bearer ' + fetchToken());
    myHeaders.append('Content-Type', 'application/json');

    return fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(parkingData)
      })
        .then(data => data.json()) 
    }


export default function AddParking({ parkingCount, setParkingCount }) {
    const [GarageName, setGarageName] = useState();
    const [cuitNumber, setCuitNumber] = useState();
    const [streetName, setStreetName] = useState();
    const [streetNumber, setStreetNumber] = useState();
    const [priceHour, setPriceHour] = useState();
    
  
   

    const handleSubmit = async e => {
      e.preventDefault();

      const response = await registerParking({
        GarageName,
        cuitNumber,
        streetName,
        streetNumber,
        priceHour
      });

    
      if (response.status === 200){
        setParkingCount(parkingCount + 1);
      }
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
                      <p>Price per Hour</p>
                      <input type="text" onChange={e => setPriceHour(parseInt(e.target.value))} />
                    </label>
                    <div>
                      <button type="submit" class="button"> Add Garage</button>
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


     
      
   
