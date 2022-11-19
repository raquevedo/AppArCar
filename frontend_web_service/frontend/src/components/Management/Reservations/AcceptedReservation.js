import React from "react";

export default function AcceptedReservation(props) {
  const expirationDate = new Date(props.reservation.expirationAtDttm);
  return (
    <tr>
      <td>{props.reservation['patentId']}</td>
      <td>
        {expirationDate.getHours()}:{expirationDate.getMinutes()}
      </td>
      <td>
        <button
          type="button"
          onClick={() => props.checkCustomerIn(props.reservation["id"])}
          class="reservations-list-button"
          id="check-button"
        >
          Check In
        </button>
      </td>
    </tr>
  );
}
