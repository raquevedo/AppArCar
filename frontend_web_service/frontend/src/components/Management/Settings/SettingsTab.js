import React, { useState, useEffect } from 'react';
import ParkingForm from '../../Forms/ParkingForm';
import { getParkingById, updateParking } from '../../../controllers/parkingController';

export default function SettingsTab(props) {
  const [parkingData, setParkingData] = useState();

  useEffect(() => {
    const fetchData = async (id) => {
      let data = await getParkingById(id);
      data = await data.json();
      setParkingData(data);
    }
    fetchData(props.id);
  }, [props.id]);

  const onSubmit = async (data) => {
    console.log('Updating settings');
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

    const resp = await updateParking(
      props.id, {
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
    if (resp.status === 200 || resp.status === 204) {
      console.log('Updated successfully');
    }
  }

  if (parkingData === undefined) {
    return(
      <div>Loading</div>
    );
  } else {
    return (
      <div className="background-settings">
      <ParkingForm
        onSubmit={onSubmit}
        currentData={parkingData}
        validationMode='onTouched'
      />
      </div>
    );
  }
}