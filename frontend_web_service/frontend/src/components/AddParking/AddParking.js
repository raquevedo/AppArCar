import React, { useState } from 'react';
import { newParking } from '../../controllers/parkingController';

export default function AddParking(setParkingData) {
  const [businessName, setBusinessName] = useState();
  const [cuitNumber, setCuitNumber] = useState();
  const [streetName, setStreetName] = useState();
  const [streetNumber, setStreetNumber] = useState();
  const [qtyTotalSlots, setQtyTotalSlots] = useState();
  const [priceHour, setPriceHour] = useState();
  const [price_6Hours, setPrice6Hours] = useState();
  const [price_12Hours, setPrice12Hours] = useState();
  const [price_24Hours, setPrice24Hours] = useState();
  const [priceWeek, setPriceWeek] = useState();
  const [priceMonth, setPriceMonth] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const parking = await newParking({
      businessName,
      cuitNumber,
      streetName,
      streetNumber,
      qtyTotalSlots,
      priceHour,
      price_6Hours,
      price_12Hours,
      price_24Hours,
      priceWeek,
      priceMonth
      });
    setParkingData(parking);
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
                    <p>Business Name</p>
                    <input type="text" onChange={e => setBusinessName(e.target.value)}/>
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
                    <p>Total Slots</p>
                    <input type="text" onChange={e => setQtyTotalSlots(parseInt(e.target.value))}/>
                  </label>
                  <label>
                    <p>Price Hour</p>
                    <input type="text" onChange={e => setPriceHour(parseInt(e.target.value))}/>
                  </label>
                  <label>
                    <p>Price 6 Hours</p>
                    <input type="text" onChange={e => setPrice6Hours(parseInt(e.target.value))}/>
                  </label>
                  <label>
                    <p>Price 12 Hours</p>
                    <input type="text" onChange={e => setPrice12Hours(parseInt(e.target.value))}/>
                  </label>
                  <label>
                    <p>Price 24 Hours</p>
                    <input type="text" onChange={e => setPrice24Hours(parseInt(e.target.value))}/>
                  </label>
                  <label>
                    <p>Price Week</p>
                    <input type="text" onChange={e => setPriceWeek(parseInt(e.target.value))}/>
                  </label>
                  <label>
                    <p>Price Month</p>
                    <input type="text" onChange={e => setPriceMonth(parseInt(e.target.value))}/>
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
