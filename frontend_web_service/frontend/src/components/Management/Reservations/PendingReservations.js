import React, { useState, useEffect } from 'react';
import PendingReservation from './PendingReservation';
import { io } from 'socket.io-client';

export default function PendingReservations({reservations, setReservations, AcceptReservation}) {
  const [socket, setSocket] = useState();
  const [socketConnected, setSocketConnected] = useState(false);

  // Start connection with socket server
  useEffect(() => {
    const newSocket = io(
      'http://localhost:3004/',
      {
        transports: ['websocket']
      }
    );
    setSocket(newSocket);
    console.log('Connection to socket established')
  }, []);

  // Subscribe to event once connection is established
  useEffect(() => {
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

    socket.on('reservation', () => {
      console.log('New reservation detected');
    })
 
  }, [socket]);

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