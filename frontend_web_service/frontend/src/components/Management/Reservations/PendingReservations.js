import React, { useState, useEffect } from 'react';
import PendingReservation from './PendingReservation';
import { getReservations } from '../../../controllers/parkingController';
import { useParams } from 'react-router-dom';
import { io } from 'socket.io-client';

export default function PendingReservations({reservations, setReservations, AcceptReservation}) {
  const { id } = useParams();
  const [socket, setSocket] = useState();
  const [, setSocketConnected] = useState(false);

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

  // Start connection with socket server
  useEffect(() => {
    const newSocket = io(
      'http://localhost:3004/reservations',
      {
        transports: ['websocket']
      }
    );
    setSocket(newSocket);
    console.log('Connection to socket established')
  }, []);

  // Subscribe to event once connection is established
  if (socket) {
    console.log(socket);
    if (!socket) return;
 
    socket.on('connect', () => {
      setSocketConnected(socket.connected);
      console.log(`Connected to socket, client id:${socket.id}`);
    });

    socket.on('disconnect', () => {
      setSocketConnected(socket.connected);
      console.log('Disconnected from socket');
    });

    socket.on('reservation_created', (data) => {
      console.log(`New reservation detected ${data}`);
      updateReservations(JSON.parse(data));
    })
  }
  return(
    <div className="table-main">
      <div className="table-body">
      <h2 className='text-reservations'>Pending Reservations</h2>
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
    </div>
  )
}