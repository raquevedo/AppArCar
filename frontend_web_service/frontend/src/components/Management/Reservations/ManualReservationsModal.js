import React from "react";
import ManualReservationForm from "../../Forms/ManualReservationForm";

export default function ManualReservationsModal (props) {

  const handleClose = () => {
    props.setShowModal(false);
  }

  return(
    <div className="modal">
      <div className="modal-main with-shadow" id="manual-reservation-modal">
        <div className="grid-x center">
          <div className="cell small-11">
            <h1 className="modal-header">
              Manual Reservation
            </h1>
          </div>
          <div className="cell small-1">
            <button className="close-modal" onClick={handleClose}>
              X
            </button>
          </div>
        </div>
        <ManualReservationForm
          parkingId={props.parkingId}
          setShowModal={props.setShowModal}
          parkedCars={props.parkedCars}
          setParkedCars={props.setParkedCars}
        />
      </div>
    </div>
  )
}