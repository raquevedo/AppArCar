import React, { useEffect } from 'react';
import PendingReservation from './PendingReservation';
import { getReservations } from '../../../controllers/parkingController';
import { useParams } from 'react-router-dom';

export default function PendingReservations({socket, reservations, setReservations, AcceptReservation}) {
  const { id } = useParams();

  function updateReservations(newReservation) {
    setReservations([...reservations, ...[newReservation]])
  }

  useEffect((id, setReservations) => {
    async function setReservationData(id) {
      const response = await getReservations(id);
  
      if (response.status === 200) {
        const data = await response.json();
  
        // Checks each reservation status to assign to hook
        let pendings = [];
  
        for (let reservationKey in data) {
          if (data[reservationKey]['status'] === 'created') {
            pendings.push(data[reservationKey]);
          }
        }

        setReservations(pendings);
      } else {
        console.log(`Error when fetching reservation data: ${response.status}`)
      }
    }
    setReservationData(id);
  }, [id, setReservations]);

  // Subscribe to event once connection is established
  if (socket) {
    if (!socket) return;

    socket.on('reservation_created', (data) => {
      console.log(`New reservation detected ${data}`);
      updateReservations(JSON.parse(data));
    })
  }

  return(
    <div>
      <h2>Pending Reservations</h2>
      <table>
        <thead>
          <tr>
            <th>Driver</th>
            <th>Expiration Date</th>
            <th>Approve</th>
            <th>Reject</th>
          </tr>
        </thead>
        <tbody>
          { reservations.map((reservation, index) => (
            <PendingReservation
              key={index}
              reservation={reservation}
              reservations={reservations}
              setReservations={setReservations}
              AcceptReservation={AcceptReservation}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}