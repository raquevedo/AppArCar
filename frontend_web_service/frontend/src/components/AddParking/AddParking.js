import React, { useState } from 'react';





export default function AddParking() {
    const [userId, setUserId] = useState();
    const [id, setId] = useState();
    const [title, setTitle] = useState();
    const [body, setbody] = useState();
    //const [priceHour, setPriceHour] = useState();
    
  
    const fetchData = async (e) =>{
      e.fetch('http://localhost:8000/parking/parking/create', {
      method: 'POST',
      body: JSON.stringify({
        userId,
        id,
        title,
        body
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
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
                  <form >
                    <label>
                      <p>Garage Name</p>
                      <input type="text" onChange={e => setId(e.target.value)}/>
                    </label>
                    <label>
                      <p>CUIT</p>
                      <input type="text" onChange={e => setUserId(e.target.value)}/>
                    </label>
                    <label>
                      <p>Street Name</p>
                      <input type="text" onChange={e => setTitle(e.target.value)}/>
                    </label>
                    <label>
                      <p>Street Number</p>
                      <input type="text" onChange={e => setbody(parseInt(e.target.value))}/>
                    </label>
                    
                    <div>
                      <button type="submit" class="button" onClick={fetchData}> Add Garage</button>
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


     