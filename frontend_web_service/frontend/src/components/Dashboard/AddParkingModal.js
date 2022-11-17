import React, { useState } from "react";
import ParkingForm from "../Forms/ParkingForm";
import { newParking } from "../../controllers/parkingController";

function AddParkingModal(props) {
  const handleClose = () => {
    props.setShowModal(false);
  };

  const defaultValues = {};
  const [buttonDisabled, setButtonDisabled] = useState(false);

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
  };

  return (
    <div className="modal">
      <div className="modal-main modal-large scroll-overflow">
        <div className="grid-container">
          <div className="grid-y">
            <div className="cell">
              <div className="grid-x center">
                <div className="cell small-11">
                  <h1 className="modal-header">
                    New Parking Garage
                  </h1>
                </div>
                <div className="cell small-1">
                  <button className="close-modal" onClick={handleClose}>
                    X
                  </button>
                </div>
              </div>
            </div>
            <div className="cell">
              <p id="is-required-text">* Required</p>
            </div>
            <div className="cell">
              <ParkingForm
                onSubmit={onSubmit}
                currentData={defaultValues}
                validationMode="onTouched"
                buttonDisabled={buttonDisabled}
                isModal={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddParkingModal;
