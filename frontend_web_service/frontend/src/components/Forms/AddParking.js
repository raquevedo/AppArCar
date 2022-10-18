import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { newParking } from '../../controllers/parkingController';

const schema = yup.object({
  businessName: yup.string().required(),
  cuitNumber: yup.string().required(),
  streetName: yup.string().required(),
  streetNumber: yup.number().required(),
  qtyTotalSlots: yup.number().required(),
  priceHour: yup.number().required(),
  price_6Hours: yup.number(),
  price_12Hours: yup.number(),
  price_24Hours: yup.number(),
  priceWeek: yup.number(),
  priceMonth: yup.number(),
})

export default function AddParking(props) {
  const { register, handleSubmit, formState:{ errors } } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data) => {
    const businessName = data.businessName;
    const cuitNumber = data.cuitNumber;
    const streetName = data.streetName;
    const streetNumber = data.streetNumber;
    const qtyTotalSlots = data.qtyTotalSlots;
    const priceHour = data.priceHour;
    const price_6Hours = data.price_6Hours;
    const price_12Hours = data.price_12Hours;
    const price_24Hours = data.price_24Hours;
    const priceWeek = data.priceWeek;
    const priceMonth = data.priceMonth;

    const resp = await newParking({
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

    if (resp.status === 200) {
      props.setShowModal(false);
      let data = await resp.json();
      props.setParkingData([...props.parkingData, ...[data]]);
    }
  }

  return(
    <div className='grid-container'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='grid-x align-center grid-padding-x'>
          <div className='cell large-6 small-12'>
            <label>Business Name</label>
            <input type="text" {
              ...register("businessName")
              }
            />
            { errors.businessName && <p>Name is invalid</p> }

            <label>Cuit</label>
            <input type="text" {
              ...register("cuitNumber")
              }
            />
            { errors.cuitNumber && <p>Cuit is invalid</p> }

            <label>Street Name</label>
            <input type="text" {
              ...register("streetName")
              }
            />
            { errors.streetName && <p>Street is invalid</p> }

            <label>Street Number</label>
            <input type="text" {
              ...register("streetNumber")
              }
            />
            { errors.streetNumber && <p>Street number is invalid</p> }

            <label>Capacity</label>
            <input type="text" {
              ...register("qtyTotalSlots")
              }
            />
            { errors.qtyTotalSlots && <p>Capacity is invalid</p> }
          </div>
          <div className='cell large-6 small-12'>
            <label>Price per Hour</label>
            <input type="text" {
              ...register("priceHour")
              }
            />
            { errors.priceHour && <p>Price is invalid</p> }

            <label>Price per 6 hours</label>
            <input type="text" {
              ...register("price_6hours")
              }
            />
            { errors.price_6Hours && <p>Price is invalid</p> }

            <label>Price per 12 Hours</label>
            <input type="text" {
              ...register("price_12Hours")
              }
            />
            { errors.price_12Hours && <p>Price is invalid</p> }

            <label>Price per Week</label>
            <input type="text" {
              ...register("priceWeek")
              }
            />
            { errors.priceWeek && <p>Price is invalid</p> }

            <label>Price per Month</label>
            <input type="text" {
              ...register("priceMonth")
              }
            />
            { errors.priceMonth && <p>Price is invalid</p> }
          </div>
          <button className="button" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
