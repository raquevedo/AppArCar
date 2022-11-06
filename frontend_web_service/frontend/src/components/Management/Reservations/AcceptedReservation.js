import React from "react";

export default function AcceptedReservation(props) {
  const expirationDate = new Date(props.reservation.expirationAtDttm);
  return (
    <tr>
      <td>{props.reservation.idCarDriver}</td>
      <td>
        {expirationDate.getHours()}:{expirationDate.getMinutes()}
      </td>
      <td>
        <button
          className="status-pending"
          onClick={() => props.checkCustomerIn(props.reservation["id"])}
        >
          Check In
        </button>
      </td>
    </tr>
  );
}
