import React, { useEffect, useState } from "react";
import { getAllReservations } from "../../controllers/parkingController";
import ParkingHistory from "./ParkingHistory";

export default function HistoryView() {
  const [parkings, setParkings] = useState([]);

  useEffect(() => {
    const fetchAllReservations = async () => {
      let response = await getAllReservations();
      if (response.status === 200) {
        setParkings(await response.json())
      }
    }
    fetchAllReservations();
  }, [])

  return (
    <div>
      <h1>Transaction History</h1>
      <div>
        {parkings.map((parking, index) => (
          <ParkingHistory parking={parking}/>
        ))}
      </div>
    </div>
  );
}
