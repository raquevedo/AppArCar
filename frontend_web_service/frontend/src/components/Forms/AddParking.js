import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { newParking } from "../../controllers/parkingController";

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

export default function AddParking(props) {
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const { register, handleSubmit, formState:{ errors } } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data) => {
    setButtonDisabled(true);

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
      priceMonth,
    });

    if (resp.status === 200) {
      props.setShowModal(false);
      let data = await resp.json();
      props.setParkingData([...props.parkingData, ...[data]]);
    }
  }

  return (
    <div className="grid-container grid-margin-x grid-padding-x login-box-modal-body">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="grid-x align-center grid-margin-x grid-padding-x  grid-padding-y">
          <div className="cell large-6 small-12">
            <div class="user-box">
              <input
                type="text"
                placeholder="Business Name"
                {...register("businessName")}
              />
            </div>

            {errors.businessName && <p>Name is invalid</p>}
            <div class="user-box">
              <input
                type="text"
                placeholder="Cuit"
                {...register("cuitNumber")}
              />
            </div>

            {errors.cuitNumber && <p>Cuit is invalid</p>}
            <div class="user-box">
              <input
                type="text"
                placeholder="Street Name"
                {...register("streetName")}
              />
            </div>
            
            {errors.streetName && <p>Street is invalid</p>}
            <div class="user-box">
              <input
                type="text"
                placeholder="Street Number"
                {...register("streetNumber")}
              />
            </div>
            
            {errors.streetNumber && <p>Street number is invalid</p>}
            <div class="user-box">
              <input
                type="text"
                placeholder="Capacity"
                {...register("qtyTotalSlots")}
              />
            </div>
            
            {errors.qtyTotalSlots && <p>Capacity is invalid</p>}
          </div>
          <div className="cell large-6 small-12">
          <div class="user-box">
              <input
                type="text"
                placeholder="Price per Hour"
                {...register("priceHour")}
              />
            </div>
            
            {errors.priceHour && <p>Price is invalid</p>}
            <div class="user-box">
              <input
                type="text"
                placeholder="Price per 6 hours"
                {...register("price_6hours")}
              />
            </div>
            
            {errors.price_6Hours && <p>Price is invalid</p>}
            <div class="user-box">
              <input
                type="text"
                placeholder="Price per 12 Hours"
                {...register("price_12Hours")}
              />
            </div>
            
            {errors.price_12Hours && <p>Price is invalid</p>}
            <div class="user-box">
              <input
                type="text"
                placeholder="Price per Week"
                {...register("priceWeek")}
              />
            </div>
            
            {errors.priceWeek && <p>Price is invalid</p>}
            <div class="user-box">
              <input
                type="text"
                placeholder="Price per Month"
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
