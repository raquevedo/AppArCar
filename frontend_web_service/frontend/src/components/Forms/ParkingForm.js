import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export default function ParkingForm(props) {
  const schema = yup.object({
    businessName: yup.string().required(),
    cuitNumber: yup.string().required(),
    streetName: yup.string().required(),
    streetNumber: yup.number().required(),
    qtyTotalSlots: yup.number().required(),
    priceHour: yup.number().required(),
    price_6Hours: yup.number().required(),
    price_12Hours: yup.number().required(),
    price_24Hours: yup.number().required(),
    priceWeek: yup.number().required(),
    priceMonth: yup.number().required(),
  });

  const { register, handleSubmit, formState:{ errors } } = useForm({
    mode: props.validationMode,
    defaultValues: {
      businessName: props.currentData['businessName'],
      cuitNumber: props.currentData['cuitNumber'],
      streetName: props.currentData['streetName'],
      streetNumber: props.currentData['streetNumber'],
      qtyTotalSlots: props.currentData['qtyTotalSlots'],
      priceHour: props.currentData['priceHour'],
      price_6Hours: props.currentData['price_6Hours'],
      price_12Hours: props.currentData['price_12Hours'],
      price_24Hours: props.currentData['price_24Hours'],
      priceWeek: props.currentData['priceWeek'],
      priceMonth: props.currentData['priceMonth']
    },
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data) => {
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
                placeholder="Price per 24 Hours"
                {...register("price_24Hours")}
              />
            </div>            
            {errors.price_24Hours && <p>Price is invalid</p>}

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
          <div>
            <button className="bn632-hover bn24" disabled={props.buttonDisabled} type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}
