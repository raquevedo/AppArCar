import React, { useState, useEffect } from 'react';
import PendingReservation from './PendingReservation';
import io from 'socket.io-client';

export default function PendingReservations({reservations, setReservations, AcceptReservation}) {
  const [socket, setSocket] = useState(null);
  const [setSocketConnected] = useState(false);

  // Start connection with socket server
  useEffect(() => {
    const socket = io('http://localhost:3004');
    socket.on('connect', function() {
      console.log('Connected');

      socket.emit('events', { test: 'test' });
      socket.emit('identity', 0, response =>
        console.log('Identity:', response),
      );
    });
    socket.on('events', function(data) {
      console.log('event', data);
    });
    socket.on('exception', function(data) {
      console.log('event', data);
    });
    socket.on('disconnect', function() {
      console.log('Disconnected');
    });
  }, []);

  /*
  // Subscribe to event once connection is established
  useEffect(() => {
    if (!socket) return;
 
    socket.on('connect', () => {
      setSocketConnected(socket.connected);
    });
    socket.on('disconnect', () => {
      setSocketConnected(socket.connected);
    });
 
  }, [socket]);
  */

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