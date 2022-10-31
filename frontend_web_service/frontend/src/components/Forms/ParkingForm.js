import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { get } from '../../utils/dictGet';

export default function ParkingForm(props) {
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
  });

  const [buttonDisabled, setButtonDisabled] = useState(false);
  const { register, handleSubmit, formState:{ errors } } = useForm({
    mode: props.validationMode,
    defaultValues: {
      businessName: get(props.currentData, 'businessName', ''),
      cuitNumber: get(props.currentData, 'cuitNumber', ''),
      streetName: get(props.currentData, 'streetName', ''),
      streetNumber: get(props.currentData, 'streetNumber', ''),
      qtyTotalSlots: get(props.currentData, 'qtyTotalSlots', ''),
      priceHour: get(props.currentData, 'priceHour', ''),
      price_6Hours: get(props.currentData, 'price_6Hours', ''),
      price_12Hours: get(props.currentData, 'price_12Hours', ''),
      price_24Hours: get(props.currentData, 'price_24Hours', ''),
      priceWeek: get(props.currentData, 'priceWeek', ''),
      priceMonth: get(props.currentData, 'priceMonth', '')
    },
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data) => {
    setButtonDisabled(true);
    props.onSubmit(data);
  }

  return (
    <div className="grid-container grid-margin-x grid-padding-x login-box-modal-body">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid-x align-center grid-margin-x grid-padding-x grid-padding-y">
          <div className="cell large-6 small-12">
            <div className="user-box">
              <input
                type="text"
                placeholder="Business Name"
                {...register("businessName")}
              />
            </div>
            {errors.businessName && <p>Name is invalid</p>}

            <div className="user-box">
              <input
                type="text"
                placeholder="Cuit"
                {...register("cuitNumber")}
              />
            </div>
            {errors.cuitNumber && <p>Cuit is invalid</p>}

            <div className="user-box">
              <input
                type="text"
                placeholder="Street Name"
                {...register("streetName")}
              />
            </div>            
            {errors.streetName && <p>Street is invalid</p>}

            <div className="user-box">
              <input
                type="text"
                placeholder="Street Number"
                {...register("streetNumber")}
              />
            </div>            
            {errors.streetNumber && <p>Street number is invalid</p>}

            <div className="user-box">
              <input
                type="text"
                placeholder="Capacity"
                {...register("qtyTotalSlots")}
              />
            </div>            
            {errors.qtyTotalSlots && <p>Capacity is invalid</p>}

          </div>
          <div className="cell large-6 small-12">
            <div className="user-box">
              <input
                type="text"
                placeholder="Price per Hour"
                {...register("priceHour")}
              />
            </div>            
            {errors.priceHour && <p>Price is invalid</p>}

            <div className="user-box">
              <input
                type="text"
                placeholder="Price per 6 hours"
                {...register("price_6Hours")}
              />
            </div>
            {errors.price_6Hours && <p>Price is invalid</p>}

            <div className="user-box">
              <input
                type="text"
                placeholder="Price per 12 Hours"
                {...register("price_12Hours")}
              />
            </div>            
            {errors.price_12Hours && <p>Price is invalid</p>}

            <div className="user-box">
              <input
                type="text"
                placeholder="Price per Week"
                {...register("priceWeek")}
              />
            </div>
            {errors.priceWeek && <p>Price is invalid</p>}

            <div className="user-box">
              <input
                type="text"
                placeholder="Price per Month"
                {...register("priceMonth")}
              />
            </div>
            {errors.priceMonth && <p>Price is invalid</p>}

          </div>
          <button className="bn632-hover bn24" disabled={buttonDisabled} type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
