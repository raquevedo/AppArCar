import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TextCard from "./TextCard";
import { getParkingStatusID} from "../../controllers/parkingController";
import ReservationsTab from './Reservations/ReservationsTab';

export default function ManagementBoard() {
  /* Extracts the ID from the url */
  const { id } = useParams();
  const [toggleState, setToggleState] = useState('reservations');

  const [toggleState, setToggleState] = useState(1);
  const [totalSlots, setTotalSlots] = useState([]);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [occupiedSlots, setOccupiedSlots] = useState([]);
  const [bookedSlots, setBookedSlots] = useState([]);
  const [blockedSlots, setBlockedSlots] = useState([]);

  let params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getParkingStatusID(params.id);
      setTotalSlots(data.qtyTotalSlots);
      setAvailableSlots(data.qtyFreeSlots);
      setOccupiedSlots(data.qtyBusySlots);
      setBookedSlots(data.qtyReservedSlots);
      setBlockedSlots(data.qtyBlockedSlots);
    };
    fetchData();
  }, []);

  

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div>
      <div className="container">
        <div className="bloc-tabs">
          <div className="grid-x">
            <div className="cell small-3">
              <button
                className={
                  toggleState === "reservations" ? "tabs active-tabs" : "tabs"
                }
                onClick={() => toggleTab("reservations")}
              >
                Reservations
              </button>
            </div>
            <div className="cell small-3">
              <button
                className={
                  toggleState === "hours" ? "tabs active-tabs" : "tabs"
                }
                onClick={() => toggleTab("hours")}
              >
                Hours
              </button>
            </div>
            <div className="cell small-3">
              <button
                className={
                  toggleState === "settings" ? "tabs active-tabs" : "tabs"
                }
                onClick={() => toggleTab("settings")}
              >
                Settings
              </button>
            </div>
            <div className="cell small-3">
              <button
                className={
                  toggleState === "status" ? "tabs active-tabs" : "tabs"
                }
                onClick={() => toggleTab("status")}
              >
                Status
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="content-tabs">
        { toggleState === 'reservations' && 
          <ReservationsTab id={id}/>
        }
        { toggleState === 'hours' && 
          <div>
          'hours'
        </div>

        <div className="content-tabs">
          {toggleState === "notifications" && <div>'notifications'</div>}
          {toggleState === "hours" && <div></div>}
          {toggleState === "settings" && <div></div>}
          {toggleState === "status" && (
            <div>
              <TextCard title="Total Slots:" value={totalSlots} />
              <TextCard title="Available Slots:" value={availableSlots} />
              <TextCard title="Occupied Slots:" value={occupiedSlots} />
              <TextCard title="Booked Slots:" value={bookedSlots} />
              <TextCard title="Blocked Slots:" value={blockedSlots} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
