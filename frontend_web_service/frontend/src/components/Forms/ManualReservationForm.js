import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { createManualReservation } from '../../controllers/parkingController';

export default function ManualReservationForm(props) {
  const schema = yup.object({
    licensePlate: yup.string().required()
  });

  const { register, handleSubmit, formState:{ errors } } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(schema)
  })

  const onSubmit = async (data) => {
    const licensePlate = data.licensePlate;
    console.log(props.parkingId)
    let response = await createManualReservation(parseInt(props.parkingId), licensePlate);
    if (response.status === 200) {
      props.setShowModal(false);
      let data = await response.json();
      props.setParkedCars([...props.parkedCars, ...[data]]);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='grid-y'>
        <div className='cell'>
          <h3>License Plate:</h3>
          <input
            type="text"
            {...register("licensePlate")}
          />
        </div>
        {errors.licensePlate && <p>Name is invalid</p>}
        <div className="cell">
          <button className="form-button" disabled={props.buttonDisabled} type="submit">Submit</button>
        </div>
      </div>
    </form>
  );
}