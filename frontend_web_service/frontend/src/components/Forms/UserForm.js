import React, { useState, useEffect} from 'react';
import { registerParking, updateParking, getParkingData } from '../../controllers/usersController';
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
 
  console.log(values);
  const [name, setName] = useState([]);
  const [lastName, setLastName] = useState();
  const [documentNumber, setDocumentNumber] = useState();

  useEffect(() => {
    
    async function assignParkingData() {
        const parking = await getParkingData();
        setName(parking.data.name)
        setLastName(parking.data.lastName)
        setDocumentNumber(parking.data.documentNumber)
        
      }
      assignParkingData();
  }, [])

  const handleSubmit = async e => {
    e.preventDefault();
    if (newUser) {
      await registerParking({
        
        name,
        lastName,
        documentNumber
      
      });
    } else {
      await updateParking({
        
        name,
        lastName,
        documentNumber
        
      });
    }
    
    if (!(setIsRegistered === undefined)) {
      setIsRegistered(true);
    }
  }

  return(
    <form onSubmit={handleSubmit}>
      
        <div class="user-box">
          <input type="text" value={name} placeholder='Name' onChange={e => setName(e.target.value)} />
        </div>
        <div class="user-box">
          <input type="text" value={lastName} placeholder="Lastname" onChange={e => setLastName(e.target.value)} />
        </div>
        <div class="user-box">
          <input type="text" value={documentNumber} placeholder="Document Number" onChange={e => setDocumentNumber(parseInt(e.target.value))} />
        </div>
        
      
      <div>
        <button type="submit" className="bn632-hover bn24">{buttonText}</button>
      </div>
    </form>
  );
}