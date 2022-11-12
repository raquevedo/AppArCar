import React from "react";
import AcceptedReservation from "./AcceptedReservation";

export default function AcceptedReservations(props) {
  return (
    <div className="table-body">
      <h2 className="text-reservations">Accepted Reservations</h2>
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
