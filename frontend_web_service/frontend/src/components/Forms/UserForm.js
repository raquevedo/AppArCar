import React, { useState } from 'react';
import { registerUser, updateUser,registerParking,updateParking } from '../../controllers/usersController';
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

  const [username, setUsername] = useState();
  const [name, setName] = useState();
  const [lastName, setLastName] = useState();
  const [documentNumber, setDocumentNumber] = useState();
  const [email, setEmail] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    if (newUser) {
      await registerParking({
        
        name,
        lastName,
        documentNumber,
       
      });
    } else {
      await updateParking({
        username,
        name,
        lastName,
        documentNumber,
        email
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