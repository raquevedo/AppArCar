import React from 'react';
import { removeById } from '../../../utils/removeById';

export default function AcceptedReservation({ reservation, reservations, setReservations }) {
  const expirationDate = new Date(reservation.expirationAtDttm)

  async function CancelReservation(reservations, id) {
    // TODO: Send request to the backend to cancel the reservation
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
        <button className='button' onClick={() => CancelReservation(reservations, reservation.id)}>Cancel</button>
      </td>
    </tr>
  )
}