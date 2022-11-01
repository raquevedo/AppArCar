import React, { useState } from 'react';
import { removeById } from '../../../utils/removeById';
import { postCheckIn, postCheckOut } from '../../../controllers/parkingController';

export default function AcceptedReservation({ reservation, reservations, setReservations }) {
  const expirationDate = new Date(reservation.expirationAtDttm)
  const [isCheckedIn, setIsCheckedIn] = useState(reservation.status === 'parked');
  
  let checkButton = <button className='status-pending' disabled>Loading</button>
  if (isCheckedIn) {
    checkButton = <button className='status-unpaid-out' onClick={() => checkCustomerOut(reservation['id'])}>Check Out</button>
  } else if (!isCheckedIn) {
    checkButton = <button className='status-pending' onClick={() => checkCustomerIn(reservation['id'])}>Check In</button>
  }

  async function checkCustomerOut(reservationId) {
    let res = await postCheckOut(reservationId);
    if (res.status === 200 || res.status === 204) {
      const newReservations = removeById(reservations, reservationId);
      setReservations(newReservations);
    } else {
      // TODO: Handle error
      console.log('Error checking out customer');
    }
  }

  async function checkCustomerIn(reservationId) {
    let res = await postCheckIn(reservationId);
    if (res.status === 200 || res.status === 204) {
      setIsCheckedIn(true);
    }
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
        { checkButton }
      </td>
    </tr>
  )
}