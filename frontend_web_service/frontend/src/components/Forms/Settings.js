import React, { useState } from 'react';
import { registerUser, updateUser } from '../../controllers/usersController';
import { get } from '../../utils/dictGet';


export default function Settings({ setIsRegistered, values, buttonText, newUser }) {
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
  const [qtyTotalSlots, setQtyTotalSlots] = useState(values['qtyTotalSlots'] ?? '');
  const [priceHour, setPriceHour] = useState(values['priceHour'] ?? '');
  const [price6Hours, setPrice6Hours] = useState(values['price6Hours'] ?? '');
  const [price12Hours, setPrice12Hours] = useState(values['price12Hours'] ?? '');
  const [price24Hours, setPrice24Hours] = useState(values['price24Hours'] ?? '');
  const [priceWeek, setPriceWeek] = useState(values['priceWeek'] ?? '');
  const [priceMonth, setPriceMonth] = useState(values['priceMonth'] ?? '');
  

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
        <input type="text" size='sm' value={businessName} onChange={e => setBusinessName(e.target.value)}/>
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
      <label>
        <p>Total Slots</p>
        <input type="text" value={qtyTotalSlots} onChange={e => setQtyTotalSlots(parseInt(e.target.value))} />
      </label>
      <label>
        <p>Price Hour</p>
        <input type="text" value={priceHour} onChange={e => setPriceHour(parseInt(e.target.value))} />
      </label>
      <label>
        <p>Price 6 Hours</p>
        <input type="text" value={price6Hours} onChange={e => setPrice6Hours(parseInt(e.target.value))} />
      </label>
      <label>
        <p>Price 12 Hours</p>
        <input type="text" value={price12Hours} onChange={e => setPrice12Hours(parseInt(e.target.value))} />
      </label>
      <label>
        <p>Price 24 Hours</p>
        <input type="text" value={price24Hours} onChange={e => setPrice24Hours(parseInt(e.target.value))} />
      </label>
      <label>
        <p>Price Week</p>
        <input type="text" value={priceWeek} onChange={e => setPriceWeek(parseInt(e.target.value))} />
      </label>
      <label>
        <p>Price Month</p>
        <input type="text" value={priceMonth} onChange={e => setPriceMonth(parseInt(e.target.value))} />
      </label>
      <div>
        <button type="submit" class="button">{buttonText}</button>
      </div>
    </form>
  );
}