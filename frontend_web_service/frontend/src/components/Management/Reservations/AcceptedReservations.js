import React from "react";
import AcceptedReservation from "./AcceptedReservation";

export default function AcceptedReservations({
  reservations,
  setReservations,
}) {
  return (
    <div className="table-body">
      <h2 className="text-reservations">Accepted Reservations</h2>
      <table>
        <thead>
          <tr>
            <th>Driver</th>
            <th>Expiration Date</th>
            <th>Cancel</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((reservation, index) => (
            <AcceptedReservation
              key={index}
              reservation={reservation}
              reservations={reservations}
              setReservations={setReservations}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
