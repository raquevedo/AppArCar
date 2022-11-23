import React, { useState } from "react";
import { acceptReservation, postCheckIn } from "../../../controllers/parkingController";
import AcceptedReservations from "./AcceptedReservations";
import ManualReservationsModal from "./ManualReservationsModal";
import ParkedCars from "./ParkedCars";
import PendingReservations from "./PendingReservations";

export default function ReservationsTab(props) {
  const [showManualReservationsModal, setShowManualReservationsModal] = useState(false);

  async function AcceptReservation(id) {
    const res = await acceptReservation(id);
    if (res.status === 200 || res.status === 204) {
      let newPendingReservations = [];
      let acceptedReservation = {};

      for (let index in props.pendingReservations) {
        if (id === props.pendingReservations[index]["id"]) {
          acceptedReservation = props.pendingReservations[index];
        } else {
          newPendingReservations.push(props.pendingReservations[index]);
        }
      }
      props.setPendingReservations(newPendingReservations);
      props.setAcceptedReservations([
        ...props.acceptedReservations,
        ...[acceptedReservation],
      ]);
    } else {
      console.log("Error accepting reservation");
      // TODO: Show error message in the interface
    }
  }

  async function checkCustomerIn(reservationId) {
    let res = await postCheckIn(reservationId);
    if (res.status === 200 || res.status === 204) {
      let newAcceptedReservations = [];
      let parkedCar = {};
      console.log(reservationId);

      for (let index in props.acceptedReservations) {
        if (reservationId === props.acceptedReservations[index]["id"]) {
          parkedCar = props.acceptedReservations[index];
        } else {
          newAcceptedReservations.push(props.acceptedReservations[index]);
        }
      }
      console.log(parkedCar);
      props.setAcceptedReservations(newAcceptedReservations);
      props.setParkedCars([...props.parkedCars, ...[parkedCar]]);
    }
  }

  async function acceptAll () {
    props.pendingReservations.forEach(function(reservation, index) {
      acceptReservation(reservation.id);
    })
    props.setAcceptedReservations([...props.acceptedReservations, ...props.pendingReservations]);
    props.setPendingReservations([]);
  }

  const showManualReservations = () => {
    setShowManualReservationsModal(true);
  }

  return (
    <div className="reservations-tab">
      <div className="grid-y">
        <div className="cell">
          <div className="grid-x align-center-middle">
            <div className="cell small-6">
              <button className="reservation-button" onClick={acceptAll}>Accept All</button>
            </div>
            <div className="cell small-6">
              <button className="reservation-button" onClick={showManualReservations}>Manual Reservation</button>
            </div>
          </div>
        </div>
        <div className="cell">
          <div className="grid-x">
            <div className="cell large-6 small-12">
              <div className="reservation-window">
                <PendingReservations
                  socket={props.socket}
                  reservations={props.pendingReservations}
                  setReservations={props.setPendingReservations}
                  AcceptReservation={AcceptReservation}
                  parkingId={props.id}
                />
              </div>
            </div>
            <div className="cell large-6 small-12">
              <div className="reservation-window">
                <AcceptedReservations
                  reservations={props.acceptedReservations}
                  setReservations={props.setAcceptedReservations}
                  checkCustomerIn={checkCustomerIn}
                />
              </div>
            </div>
          </div>
          <div className="reservation-window">
            <ParkedCars
              parkedCars={props.parkedCars}
              setParkedCars={props.setParkedCars}
            />
          </div>
        </div>
      </div>
      {showManualReservationsModal &&
        <ManualReservationsModal
          parkingId={props.id}
          setShowModal={setShowManualReservationsModal}
          parkedCars={props.parkedCars}
          setParkedCars={props.setParkedCars}
        />
      }
    </div>
  );
}
