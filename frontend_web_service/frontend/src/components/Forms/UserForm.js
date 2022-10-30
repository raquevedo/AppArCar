import React, { useState, useEffect} from 'react';
import { registerParkingUser, updateParkingUser, getParkingUser } from '../../controllers/usersController';
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

export default function UserForm({ setIsRegistered, buttonText, newUser }) {
  
  if (buttonText === undefined) {
    buttonText = 'Submit';
  }
  if (newUser === undefined) {
    newUser = false;
  }
 
  const [name, setName] = useState();
  const [lastName, setLastName] = useState();
  const [documentNumber, setDocumentNumber] = useState();
  const [userData,setUserData] = useState({});

  useEffect(() => {
    
    async function assignParkingData() {
      const parking = await getParkingUser();
      setName(parking.data.name)
      setLastName(parking.data.lastName)
      setDocumentNumber(parking.data.documentNumber)
      setUserData(parking.data);
    }
    if(!newUser){
      assignParkingData();
    }
  }, [])

  const schema = yup.object({
    
    name: yup.string().required().min(3),
    lastName: yup.string().required().min(3),
    documentNumber: yup.number().required().min(0)
  })

  const { register,handleSubmit,formState:{ errors } } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data) => {
    const name = data.name
    const lastName = data.lastName
    const documentNumber = data.documentNumber
    
  if (newUser) {
    await registerParkingUser({
      name,
      lastName,
      documentNumber
    });
  } else {
    await updateParkingUser({
      name,
      lastName,
      documentNumber
    });
  }
    
  if (!(setIsRegistered === undefined)) {
    setIsRegistered(true);
    }
  }

  //funcion que soluciona el bug de validacion
  function Focusinput(){
    document.getElementById("name").focus();
    document.getElementById("lastName").focus();
    document.getElementById("document-number").focus();
    document.getElementById("document-number").blur();
    document.getElementById("button-update-submit").click()
  }
  
  return(
    <form onSubmit={handleSubmit(onSubmit)}>
      
      <div class="user-box">
        <input id="name" type="text" placeholder='Name' {...register("name")} value={name} onChange={e => {setName(e.target.value)}}/>
      </div>
      { name !== userData.name && errors.name && <p>Name is invalid</p> }
      <div class="user-box">
        <input id="lastName" type="text" placeholder="Lastname" {...register("lastName")} value={lastName} onChange={e => {setLastName(e.target.value)}}/>
      </div>
      { lastName !== userData.lastName && errors.lastName && <p>Lastname is invalid</p> }
      <div class="user-box">
        <input id="document-number" type="text" placeholder="Document Number" {...register("documentNumber")} value={documentNumber} onChange={e => {setDocumentNumber(e.target.value)}}/>
      </div>
      { documentNumber !== userData.documentNumber && errors.documentNumber && <p>Document Number is invalid</p> }
      
      <div>
        <button id="button-update-submit" type="submit" className="bn632-hover bn24" onClick={()=>{Focusinput()}}>{buttonText}</button>
      </div>
      
    </form>
  );
}