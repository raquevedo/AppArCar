import React from "react";

export default function ReservationRow (reservation) {
  reservation = reservation['reservation'];

  const validateDate = (date) => {
    if (date !== null) {
      return new Date(date).toDateString();
    }
    return 'Manual'
  }

  const checkInDate = validateDate(reservation['checkinAtDttm']);
  const checkOutDate = validateDate(reservation['checkoutAtDttm']);
  return(
    <tr>
      <td>{reservation['patentId']}</td>
      <td>{checkInDate}</td>
      <td>{checkOutDate}</td>
      <td>{reservation['totalPrice']}</td>
    </tr>
  )
}