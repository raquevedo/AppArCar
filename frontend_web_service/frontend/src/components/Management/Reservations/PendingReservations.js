import React from "react";
import PendingReservation from "./PendingReservation";

export default function PendingReservations({
  socket,
  reservations,
  setReservations,
  AcceptReservation,
  parkingId
}) {
  function updateReservations(newReservation) {

    console.log(newReservation['idParking']);
    if (newReservation['idParking'] === parseInt(parkingId)) {
      setReservations([...reservations, ...[newReservation]]);
    }
  }

  // Subscribe to event once connection is established
  if (socket) {
    console.log(socket);
    if (!socket) return;

    socket.on("connect", () => {
      console.log(`Connected to socket, client id:${socket.id}`);
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from socket");
    });

    socket.on("reservation_created", (data) => {
      console.log(`New reservation detected ${data}`);
      updateReservations(JSON.parse(data));
    });
  }

  return (
    <div className="table-main">
      <div className="table-body">
        <h2 className="text-reservations">Pending Reservations</h2>
        <table>
          <thead>
            <tr>
              <th>License Plate</th>
              <th>Expiration Date</th>
              <th>Approve</th>
              <th>Reject</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((reservation, index) => (
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
  );
}
