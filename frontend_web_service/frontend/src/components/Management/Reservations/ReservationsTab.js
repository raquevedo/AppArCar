import React from 'react';
import { useState, useEffect } from 'react'
import { getReservations } from '../../../controllers/parkingController';
import AcceptedReservations from './AcceptedReservations';
import PendingReservations from './PendingReservations';

export default function ReservationsTab(props) {
  let [pendingReservations, setPendingReservations] = useState([]);
  let [acceptedReservations, setAcceptedReservations] = useState([]);

  useEffect(() => {
    async function setReservationData(id) {
      const response = await getReservations(id);
  
      if (response.status === 200) {
        const data = await response.json();
  
        // Checks each reservation status to assign to hook
        let pendings = [];
        let accepteds = [];
  
        for (let reservationKey in data) {
          if (data[reservationKey]['status'] === 'created') {
            pendings.push(data[reservationKey]);
          } else if (
            data[reservationKey]['status'] === 'accepted' ||
            data[reservationKey]['status'] === 'parked') {
            accepteds.push(data[reservationKey]);
          }
        }

        setPendingReservations(pendings);
        setAcceptedReservations(accepteds);
      } else {
        console.log(`Error when fetching reservation data: ${response.status}`)
      }
    }
    setReservationData(props.id);
  }, [props.id])

  async function AcceptReservation(id) {
    // TODO: Add call to the backend to accept reservation
    let newPendingReservations = [];
    let acceptedReservation = {};

    for (let index in pendingReservations) {
      if (id === pendingReservations[index]['id']) {
        acceptedReservation = pendingReservations[index];
      } else {
        newPendingReservations.push(pendingReservations[index]);
      }
    }

    setPendingReservations(newPendingReservations);
    setAcceptedReservations([...acceptedReservations, ...[acceptedReservation]]);
  }

  return(
    <div className='grid-x grid-padding-x grid-margin-x'>
      <div className='cell large-6 small-12'>
        <PendingReservations
          reservations={pendingReservations}
          setReservations={setPendingReservations}
          AcceptReservation={AcceptReservation}
        />
      </div>
      <div className='cell large-6 small-12'>
        <AcceptedReservations
          reservations={acceptedReservations}
          setReservations={setAcceptedReservations}
        />
      </div>
    </div>
  )
}