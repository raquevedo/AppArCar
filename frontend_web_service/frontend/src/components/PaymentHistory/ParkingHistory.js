import React, { useEffect, useState } from "react";
import ReservationRow from "./ReservationRow";

export default function ParkingHistory (parking) {
  const [reservations, setReservations] = useState([]);
  const [displayContents, setDisplayContents] = useState(false);

  const swapDisplay = () => {
    if (displayContents) {
      setDisplayContents(false);
    } else {
      setDisplayContents(true);
    }
  }

  useEffect(() => {
    let completedReservations = [];
    parking['parking']['reservations'].forEach((reservation) => {
      if (reservation['status'] === 'completed') {
        completedReservations.push(reservation);
      }
    })
    setReservations(completedReservations)
  }, [parking]);

  const accordionTitle = 
    <h2 className="history-parking-title" onClick={swapDisplay}>
      <span>{parking['parking']['businessName']}</span>
      { displayContents
        ? <span id="history-expand-icon">-</span>
        : <span id="history-expand-icon">+</span>
      }
    </h2>
  
  if (reservations.length === 0) {
    return(
      <div className="history-sub-box with-shadow">
        {accordionTitle}
        { displayContents && 
          <p>No reservations yet</p>
        }
      </div>
    )
  }
  return(
    <div className="history-sub-box with-shadow">
      {accordionTitle}
      { displayContents &&
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
      }
    </div>
  )
}
