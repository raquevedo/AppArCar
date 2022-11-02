import React from "react";
import { removeById } from "../../../utils/removeById";
import { rejectReservation } from "../../../controllers/parkingController";

export default function PendingReservation({
  reservation,
  reservations,
  setReservations,
  AcceptReservation,
}) {
  const expirationDate = new Date(reservation.expirationAtDttm);

  async function RejectReservation(reservations, id) {
    const res = await rejectReservation(id);
    if (res.status === 200 || res.status === 204) {
      const newReservations = removeById(reservations, id);
      setReservations(newReservations);
    } else {
      console.log("Error rejecting the reservation");
      // TODO: Show error message in the user interface
    }
  }

  return (
    <tr>
      <td>{reservation.idCarDriver}</td>
      <td>
        {expirationDate.getHours()}:{expirationDate.getMinutes()}
      </td>
      <td>
        <button
          className="status-paid"
          onClick={() => AcceptReservation(reservation.id)}
        >
          Approve
        </button>
      </td>
      <td>
        <button
          className="status-unpaid"
          onClick={() => RejectReservation(reservations, reservation.id)}
        >
          Reject
        </button>
      </td>
    </tr>
  );
}
