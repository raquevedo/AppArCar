import React, { useEffect, useState } from "react";
import { getAllReservations, getParkingData } from "../../controllers/parkingController";
import ParkingHistory from "./ParkingHistory";

export default function HistoryView() {
  const [reservationsByParking, setReservationsByParking] = useState([]);

  useEffect(() => {
    setReservationsByParking([]);
    const fetchCompleteParkingData = async () => {
      const fetchAllReservations = async () => {
        let response = await getAllReservations();
        if (response.status === 200) {
          return await response.json();
        };
      }
      const fetchParkingData = async () => {
        let response = await getParkingData();
        if (response.status === 200) {
          return await response.json();
        };
      }
      let reservations = await fetchAllReservations();
      let parkings = await fetchParkingData();

      let completeReservations = []
      reservations.forEach((reservation) => {
        parkings.forEach((parking) => {
          if (reservation['parkingId'] === parking['parkingInfo']['id']) {
            reservation['businessName'] = parking['parkingInfo']['businessName'];
            completeReservations.push(reservation);
          }
        })
      })
      setReservationsByParking(completeReservations);
    }
    fetchCompleteParkingData();
  }, []);

  console.log(reservationsByParking)

  return (
    <div>
      <h1>Transaction History</h1>
      <div>
        {reservationsByParking.map((parkingReservations, index) => (
          <ParkingHistory key={index} parking={parkingReservations}/>
        ))}
      </div>
    </div>
  );
}
