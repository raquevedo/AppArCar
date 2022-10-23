import React from 'react';
import { removeById } from '../../../utils/removeById';

export default function PendingReservation({reservation, reservations, setReservations, AcceptReservation}) {
  const expirationDate = new Date(reservation.expirationAtDttm)

  async function RejectReservation(reservations, id) {
    // TODO: Send request to the backend to reject the reservation
    const newReservations = removeById(reservations, id);
    setReservations(newReservations);
  }

  return(
    <tr>
      <td>
        {reservation.idCarDriver}
      </td>
      <td>
        {expirationDate.getHours()}:{expirationDate.getMinutes()}
      </td>
      <td>
        <button className='button' onClick={() => AcceptReservation(reservation.id)}>Approve</button>
      </td>
      <td>
        <button className='button' onClick={() => RejectReservation(reservations, reservation.id)}>Reject</button>
      </td>
    </tr>
  )
}