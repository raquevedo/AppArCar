import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TextCard from "./TextCard";
import {
  getParkingStatusID,
  getParkingDataID,
} from "../../controllers/parkingController";
import Settings from "../Forms/Settings";
import Hours from "./Hours";
import React, { useState }  from 'react';
import { useParams } from 'react-router-dom';
import ReservationsTab from './Reservations/ReservationsTab';

export default function ManagementBoard() {
  /* Extracts the ID from the url */
  const { id } = useParams();
  const [toggleState, setToggleState] = useState('reservations');

  const [totalSlots, setTotalSlots] = useState([]);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [occupiedSlots, setOccupiedSlots] = useState([]);
  const [bookedSlots, setBookedSlots] = useState([]);
  const [blockedSlots, setBlockedSlots] = useState([]);
  const [businessName, setBusinessName] = useState([]);
  const [cuitNumber, setCuitNumber] = useState([]);
  const [streetName, setStreetName] = useState([]);
  const [streetNumber, setStreeNumber] = useState([]);
  const [priceHour, setPriceHour] = useState([]);
  const [price_6Hours, setPrice6Hour] = useState([]);
  const [price_12Hours, setPrice12Hour] = useState([]);
  const [price_24Hours, setPrice24Hour] = useState([]);
  const [priceWeek, setPriceWeek] = useState([]);
  const [priceMonth, setPriceMonth] = useState([]);

  let params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getParkingStatusID(params.id);
      const data2 = await getParkingDataID(params.id);
      setTotalSlots(data.qtyTotalSlots);
      setAvailableSlots(data.qtyFreeSlots);
      setOccupiedSlots(data.qtyBusySlots);
      setBookedSlots(data.qtyReservedSlots);
      setBlockedSlots(data.qtyBlockedSlots);
      setBusinessName(data2.businessName);
      setCuitNumber(data2.cuitNumber);
      setStreetName(data2.streetName);
      setStreeNumber(data2.streetNumber);
      setPriceHour(data2.priceHour);
      setPrice6Hour(data2.price_6Hours);
      setPrice12Hour(data2.price_12Hours);
      setPrice24Hour(data2.price_24Hours);
      setPriceWeek(data2.priceWeek);
      setPriceMonth(data2.priceMonth);
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
                  toggleState === "notifications" ? "tabs active-tabs" : "tabs"
                }
                onClick={() => toggleTab("notifications")}
                className={toggleState === 'reservations' ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab('reservations')}
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

        <div className="content-tabs">
          {toggleState === "notifications" && <div>'notifications'</div>}
          {toggleState === "hours" && (
            <div>
              <div className="grid-container">
                <div className="row small-up-2 medium-up-4 large-up-6">
                  <Hours title={"Monday"} />
                  <Hours title={"Tuesday"} />
                  <Hours title={"Wednesday"} />
                  <Hours title={"Thursday"} />
                  <Hours title={"Friday"} />
                  <Hours title={"Saturday"} />
                  <Hours title={"Sunday"} />
                </div>
                <div class="grid-x align-center grid-padding-x">
                  <div className="cell large-4 small-12">
                    <button className="button" type="submit">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {toggleState === "settings" && (
            <div>
              <Settings
                value1={businessName}
                value2={cuitNumber}
                value3={streetName}
                value4={streetNumber}
                value5={totalSlots}
                value6={priceHour}
                value7={price_6Hours}
                value8={price_12Hours}
                value9={price_24Hours}
                value10={priceWeek}
                value11={priceMonth}
              />
            </div>
          )}
          {toggleState === "status" && (
            <div>
              <TextCard title="Total Slots:" value={totalSlots} />
              <TextCard title="Available Slots:" value={availableSlots} />
              <TextCard title="Occupied Slots:" value={occupiedSlots} />
              <TextCard title="Booked Slots:" value={bookedSlots} />
              <TextCard title="Blocked Slots:" value={blockedSlots} />
            </div>
          )}
      <div className="content-tabs">
        { toggleState === 'reservations' && 
          <ReservationsTab id={id}/>
        }
        { toggleState === 'hours' && 
          <div>
          'hours'
        </div>
        }
        { toggleState === 'settings' && 
          <div>
            'settings'
          </div>
        }
        { toggleState === 'status' && 
          <div>
            'status'
          </div>
        }
        </div>
      </div>
    </div>
  );
}
