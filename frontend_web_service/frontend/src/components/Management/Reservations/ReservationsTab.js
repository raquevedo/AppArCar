import React from "react";
import { acceptReservation, postCheckIn } from "../../../controllers/parkingController";
import AcceptedReservations from "./AcceptedReservations";
import ParkedCars from "./ParkedCars";
import PendingReservations from "./PendingReservations";

export default function ReservationsTab(props) {
  console.log(props.pendingReservations)

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

  return (
    <div className="reservations">
      <div className="grid-x grid-padding-x grid-margin-x background-reservations">
        <div className="cell large-6 small-12">
          <PendingReservations
            socket={props.socket}
            reservations={props.pendingReservations}
            setReservations={props.setPendingReservations}
            AcceptReservation={AcceptReservation}
          />
        </div>
        <div className="cell large-6 small-12">
          <AcceptedReservations
            reservations={props.acceptedReservations}
            setReservations={props.setAcceptedReservations}
            checkCustomerIn={checkCustomerIn}
          />
        </div>
      </div>
      <ParkedCars
        parkedCars={props.parkedCars}
        setParkedCars={props.setParkedCars}
      />
    </div>
  );
}
