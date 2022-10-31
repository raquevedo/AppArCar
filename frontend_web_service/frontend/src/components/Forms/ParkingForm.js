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
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data) => {
    setButtonDisabled(true);
    props.onSubmit(data);
  }

  return (
    <div className="grid-container grid-margin-x grid-padding-x login-box-modal-body">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div classNane="grid-x align-center grid-margin-x grid-padding-x grid-padding-y">
          <div className="cell large-6 small-12">
            <div className="user-box">
              <input
                type="text"
                placeholder="Business Name"
                defaultValue={get(props.currentData, 'businessName', '')}
                {...register("businessName")}
              />
            </div>

            {errors.businessName && <p>Name is invalid</p>}
            <div className="user-box">
              <input
                type="text"
                placeholder="Cuit"
                defaultValue={get(props.currentData, 'cuitNumber', '')}
                {...register("cuitNumber")}
              />
            </div>

            {errors.cuitNumber && <p>Cuit is invalid</p>}
            <div className="user-box">
              <input
                type="text"
                placeholder="Street Name"
                defaultValue={get(props.currentData, 'streetName', '')}
                {...register("streetName")}
              />
            </div>
            
            {errors.streetName && <p>Street is invalid</p>}
            <div className="user-box">
              <input
                type="text"
                placeholder="Street Number"
                defaultValue={get(props.currentData, 'streetNumber', '')}
                {...register("streetNumber")}
              />
            </div>
            
            {errors.streetNumber && <p>Street number is invalid</p>}
            <div className="user-box">
              <input
                type="text"
                placeholder="Capacity"
                defaultValue={get(props.currentData, 'qtyTotalSlots', '')}
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
                defaultValue={get(props.currentData, 'priceHour', '')}
                {...register("priceHour")}
              />
            </div>
            
            {errors.priceHour && <p>Price is invalid</p>}
            <div className="user-box">
              <input
                type="text"
                placeholder="Price per 6 hours"
                defaultValue={get(props.currentData, 'price_6hours', '')}
                {...register("price_6hours")}
              />
            </div>
            
            {errors.price_6Hours && <p>Price is invalid</p>}
            <div className="user-box">
              <input
                type="text"
                placeholder="Price per 12 Hours"
                defaultValue={get(props.currentData, 'price_12hours', '')}
                {...register("price_12Hours")}
              />
            </div>
            
            {errors.price_12Hours && <p>Price is invalid</p>}
            <div className="user-box">
              <input
                type="text"
                placeholder="Price per Week"
                defaultValue={get(props.currentData, 'priceWeek', '')}
                {...register("priceWeek")}
              />
            </div>
            
            {errors.priceWeek && <p>Price is invalid</p>}
            <div className="user-box">
              <input
                type="text"
                placeholder="Price per Month"
                defaultValue={get(props.currentData, 'priceMonth', '')}
                {...register("priceMonth")}
              />
            </div>
            
            {errors.priceMonth && <p>Price is invalid</p>}
          </div>
          <div>
        <button className="bn632-hover bn24" disabled={buttonDisabled} type="submit">Submit</button>
        </div>
        </div>
      </form>
    </div>
  );
}
