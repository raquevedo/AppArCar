import React, { useEffect, useState } from "react";
import ReservationRow from "./ReservationRow";

export default function ParkingHistory (parking) {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    let completedReservations = [];
    parking['parking']['reservations'].forEach((reservation) => {
      if (reservation['status'] === 'completed') {
        completedReservations.push(reservation);
      }
    })
    setReservations(completedReservations)
  }, [parking]);
  
  if (reservations.length === 0) {
    return(
      <div>
        <h2>{parking['parking']['businessName']}</h2>
        <p>No reservations yet</p>
      </div>
    )
  }
  return(
    <div>
      <h2>{parking['parking']['businessName']}</h2>
      <table>
        <thead>
          <tr>
            <th>License Plate</th>
            <th>Check in Date</th>
            <th>Check out Date</th>
            <th>Paid Amount</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((reservation, index) => (
            <ReservationRow key={index} reservation={reservation}/>
          ))}
        </tbody>
      </table>
    </div>
  )
}
