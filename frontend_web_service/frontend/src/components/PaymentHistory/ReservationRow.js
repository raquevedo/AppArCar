import React from "react";

export default function ReservationRow (reservation) {
  reservation = reservation['reservation'];
  return(
    <tr>
      <td>{reservation['patentId']}</td>
      <td>{new Date(reservation['checkinAtDttm']).toDateString()}</td>
      <td>{new Date(reservation['checkoutAtDttm']).toDateString()}</td>
      <td>{reservation['totalPrice']}</td>
    </tr>
  )
}