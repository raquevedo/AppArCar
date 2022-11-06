import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import HoursTab from "./Hours/HoursTab";
import ReservationsTab from "./Reservations/ReservationsTab";
import SettingsTab from "./Settings/SettingsTab";
import { useNavigate } from "react-router-dom";
import StatusCards from "./Status/StatusCards";
import { getReservations, getParkingStatusById } from "../../controllers/parkingController";
import { io } from "socket.io-client";

export default function ManagementBoard(props) {
  /* Extracts the ID from the url */
  const { id, tab } = useParams();

  const navigate = useNavigate();

  const [ socket, setSocket ] = useState();
  const [ totalSlots, setTotalSlots ] = useState(0);
  const [ availableSlots, setAvailableSlots ] = useState(0);
  const [ reservedSlots, setReservedSlots ] = useState(0);
  const [ occupiedSlots, setOccupiedSlots ] = useState(0);
  const [ pendingReservations, setPendingReservations ] = useState([]);
  const [ acceptedReservations, setAcceptedReservations ] = useState([]);
  const [ parkedCars, setParkedCars ] = useState([]);

  useEffect(() => {
    async function setReservationData(id) {
      const response = await getReservations(id);

      if (response.status === 200) {
        const data = await response.json();

        // Checks each reservation status to assign to hook
        let pendings = [];
        let accepteds = [];
        let parked = [];

        for (let reservationKey in data) {
          if (data[reservationKey]["status"] === "created") {
            pendings.push(data[reservationKey]);
          } else if (
            data[reservationKey]["status"] === "accepted"
          ) {
            accepteds.push(data[reservationKey]);
          } else if (
            data[reservationKey]["status"] === "parked"
          ) {
            parked.push(data[reservationKey]);
          }
        }

        setPendingReservations(pendings);
        setAcceptedReservations(accepteds);
        setParkedCars(parked);

      } else {
        console.log(`Error when fetching reservation data: ${response.status}`);
      }
    }
    setReservationData(id);
  }, [id]);

  useEffect(() => {
    if (tab === undefined) {
      // Redirect to default
      navigate("reservations");
    }
  }, [tab, navigate]);

  useEffect(() => {
    async function loadParkingStatus(id) {
      let response = await getParkingStatusById(id);
      if (response.status === 200) {
        let data = await response.json();
        setTotalSlots(data.qtyTotalSlots);
        setAvailableSlots(data.qtyFreeSlots);
        setReservedSlots(data.qtyReservedSlots);
        setOccupiedSlots(data.qtyBusySlots);
      }
    }
    if( id !== undefined ){
      loadParkingStatus(id);
    }
  }, [id]);

  // Start connection with socket server
  useEffect(() => {
    const newSocket = io("http://localhost:3004/reservations", {
      transports: ["websocket"],
    });
    setSocket(newSocket);
    console.log("Connection to socket established");
  }, []);

  useEffect(() => {
    setReservedSlots(pendingReservations.length + acceptedReservations.length);
    setOccupiedSlots(parkedCars.length);
  }, [pendingReservations, acceptedReservations, parkedCars]);

  useEffect(() => {
    setAvailableSlots(totalSlots - reservedSlots - occupiedSlots);
  }, [occupiedSlots, reservedSlots, totalSlots]);


  const renderTab = () => {
    switch (tab) {
      case "reservations":
        return <ReservationsTab
          socket={socket}
          id={id}
          pendingReservations={pendingReservations}
          setPendingReservations={setPendingReservations}
          acceptedReservations={acceptedReservations}
          setAcceptedReservations={setAcceptedReservations}
          parkedCars={parkedCars}
          setParkedCars={setParkedCars}
        />;
      case "hours":
        return <HoursTab id={id} />;
      case "settings":
        return <SettingsTab id={id} />;
      default:
        return <ReservationsTab id={id} />;
    }
  };

  const baseUrl = `/dashboard/manage/${id}`;
  return (
    <div className="grid-y">
      <div className="cell status-cards">
        <StatusCards
          socket={socket}
          availableSlots={availableSlots}
          reservedSlots={reservedSlots}
          occupiedSlots={occupiedSlots}
        />
      </div>
      <div className="cell tab-head grid-margin-y grid-padding-y">
        <div className="grid-x grid-margin-x grid-padding-x grid-margin-y grid-padding-y">
          <div
            className={
              tab === "reservations"
                ? "cell large-3 small-3 center cell-active-tabs"
                : "cell cell-tabs bn24 center large-3 small-3"
            }
            onClick={() => navigate(`${baseUrl}/reservations`)}>
            <button
              className={tab === "reservations" ? "tab-active-tabs" : "tab"}
              
            >
              Reservations
            </button>
          </div>
          <div
            className={
              tab === "hours"
                ? "cell large-3 small-3 center cell-active-tabs"
                : "cell cell-tabs bn24 center large-3 small-3"
            }
            onClick={() => navigate(`${baseUrl}/hours`)}>
            <button
              className={tab === "hours" ? "tab-active-tabs" : "tab"}
              
            >
              Hours
            </button>
          </div>
          <div
            className={
              tab === "status"
                ? "cell large-3 small-3 center cell-active-tabs"
                : "cell cell-tabs bn24 center large-3 small-3"
            }
            onClick={() => navigate(`${baseUrl}/status`)}>
            <button
              className={tab === "status" ? "tab-active-tabs" : "tab"}
              
            >
              Status
            </button>
          </div>
          <div
            className={
              tab === "settings"
                ? "cell large-3 small-3 center cell-active-tabs"
                : "cell cell-tabs bn24 center large-3 small-3"
            }
            onClick={() => navigate(`${baseUrl}/settings`)}>
            <button
              className={tab === "settings" ? "tab-active-tabs" : "tab"}
              
            >
              Settings
            </button>
          </div>
        </div>
      </div>
      <div className="content-tabs">{renderTab()}</div>
    </div>
  );
}
