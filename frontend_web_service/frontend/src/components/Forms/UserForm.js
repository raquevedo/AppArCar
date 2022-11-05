import React from 'react';
import { registerParkingUser, updateParkingUser} from '../../controllers/usersController';
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

export default function UserForm({ setIsRegistered, buttonText, newUser, valuesData }) {
  
  if (buttonText === undefined) {
    buttonText = 'Submit';
  }
  if (newUser === undefined) {
    newUser = false;
  }
  
  const schema = yup.object({
    
    name: yup.string().required().min(3),
    lastName: yup.string().required().min(3),
    documentNumber: yup.number().required().min(0)
  })
  
  const { register,handleSubmit,formState:{ errors } } = useForm({
    mode: 'onTouched',
    defaultValues: {

      name: valuesData['name'],
      lastName: valuesData['lastName'],
      documentNumber:valuesData['documentNumber'] 
    },

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
  return(
    <form onSubmit={handleSubmit(onSubmit)}>
      
      <div class="user-box">
        <input type="text" placeholder='Name' {...register("name")}/>
      </div>
      { errors.name && <p>Name is invalid</p> }
      <div class="user-box">
        <input type="text" placeholder="Lastname" {...register("lastName")}/>
      </div>
      { errors.lastName && <p>Lastname is invalid</p> }
      <div class="user-box">
        <input type="text" placeholder="Document Number" {...register("documentNumber")}/>
      </div>
      { errors.documentNumber && <p>Document Number is invalid</p> }
      
      <div>
        <button id="button-update-submit" type="submit" className="bn632-hover bn24">{buttonText}</button>
      </div>
      
    </form>
  );
}