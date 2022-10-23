import React from 'react';
import PendingReservation from './PendingReservation';

export default function PendingReservations({reservations, setReservations, AcceptReservation}) {
  return(
    <div>
      <h2>Pending Reservations</h2>
      <table>
        <thead>
          <tr>
            <th>Driver</th>
            <th>Expiration Date</th>
            <th>Approve</th>
            <th>Reject</th>
          </tr>
        </thead>
        <tbody>
          { reservations.map((reservation, index) => (
            <PendingReservation
              key={index}
              reservation={reservation}
              reservations={reservations}
              setReservations={setReservations}
              AcceptReservation={AcceptReservation}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}