import React from "react";
import AcceptedReservation from "./AcceptedReservation";

export default function AcceptedReservations(props) {
  return (
    <div>
      <h2>Accepted Reservations</h2>
      <table>
        <thead>
          <tr>
            <th>License Plate</th>
            <th>Expiration Date</th>
            <th>Check In</th>
          </tr>
        </thead>
        <tbody>
          {props.reservations.map((reservation, index) => (
            <AcceptedReservation
              key={index}
              reservation={reservation}
              reservations={props.reservations}
              setReservations={props.setReservations}
              checkCustomerIn={props.checkCustomerIn}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
