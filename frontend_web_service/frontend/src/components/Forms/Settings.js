import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { updateParking } from '../../controllers/parkingController';
import { useParams } from 'react-router-dom';

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

export default function Settings(props) {
  const { register, handleSubmit, formState:{ errors } } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(schema)
  });

  let params = useParams();

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

    await updateParking(params.id,{
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
  }

  return(
    <div className='grid-container'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class='grid-x align-center grid-padding-x'>
          <div className='cell large-6 small-12'>
            <label>Business Name</label>
            <input defaultValue={props.value1} type="text" {
              ...register("businessName")
              }
            />
            { errors.businessName && <p>Name is invalid</p> }

            <label>Cuit</label>
            <input defaultValue={props.value2} type="text" {
              ...register("cuitNumber")
              }
            />
            { errors.cuitNumber && <p>Cuit is invalid</p> }

            <label>Street Name</label>
            <input defaultValue={props.value3} type="text" {
              ...register("streetName")
              }
            />
            { errors.streetName && <p>Street is invalid</p> }

            <label>Street Number</label>
            <input defaultValue={props.value4} type="text" {
              ...register("streetNumber")
              }
            />
            { errors.streetNumber && <p>Street number is invalid</p> }

            <label>Capacity</label>
            <input defaultValue={props.value5} type="text" {
              ...register("qtyTotalSlots")
              }
            />
            { errors.qtyTotalSlots && <p>Capacity is invalid</p> }
          </div>
          <div className='cell large-6 small-12'>
            <label>Price per Hour</label>
            <input defaultValue={props.value6} type="text" {
              ...register("priceHour")
              }
            />
            { errors.priceHour && <p>Price is invalid</p> }

            <label>Price per 6 hours</label>
            <input defaultValue={props.value7} type="text" {
              ...register("price_6Hours")
              }
            />
            { errors.price_6Hours && <p>Price is invalid</p> }

            <label>Price per 12 Hours</label>
            <input defaultValue={props.value8} type="text" {
              ...register("price_12Hours")
              }
            />
            { errors.price_12Hours && <p>Price is invalid</p> }

            <label>Price per 24 Hours</label>
            <input defaultValue={props.value9} type="text" {
              ...register("price_24Hours")
              }
            />
            { errors.price_24Hours && <p>Price is invalid</p> }

            <label>Price per Week</label>
            <input defaultValue={props.value10} type="text" {
              ...register("priceWeek")
              }
            />
            { errors.priceWeek && <p>Price is invalid</p> }

            <label>Price per Month</label>
            <input defaultValue={props.value11} type="text" {
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
