import React, { useState, useEffect }  from 'react';
import { useParams } from 'react-router-dom';
import HoursTab from './Hours/HoursTab';
import ReservationsTab from './Reservations/ReservationsTab';
import SettingsTab from './Settings/SettingsTab';
import { useNavigate } from 'react-router-dom';
import { io } from 'socket.io-client';
import StatusCards from './Status/StatusCards';
import { getParkingStatusById } from '../../controllers/parkingController';

export default function ManagementBoard() {
  /* Extracts the ID from the url */
  const { id, tab } = useParams();
  const navigate = useNavigate();
  const [socket, setSocket] = useState();
  const [ availableSlots, setAvailableSlots ] = useState();
  const [ reservedSlots, setReservedSlots ] = useState();
  const [ occupiedSlots, setOccupiedSlots ] = useState();

  useEffect(() => {
    if ( tab === undefined ) {
      // Redirect to default
      navigate('reservations');
    }
  }, [tab, navigate])

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

  // Fetching slots data
  useEffect(() => {
    async function loadParkingStatus(id) {
      let response = await getParkingStatusById(id);
      if (response.status === 200) {
        let data = await response.json();
        setAvailableSlots(data.qtyFreeSlots);
        setReservedSlots(data.qtyReservedSlots);
        setOccupiedSlots(data.qtyBusySlots);
      }
    }
    if( id !== undefined ){
      loadParkingStatus(id);
    }
  }, [id]);

  if (socket) {
    socket.on('connect', () => {
      console.log(`Connected to socket, client id:${socket.id}`);
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from socket');
    });
  };

  const renderTab = () => {
    switch (tab) {
      case 'reservations': return <ReservationsTab id={id} socket={socket}/>;
      case 'hours': return <HoursTab id={id}/>;
      case 'settings': return <SettingsTab id={id}/>;
      default: return <ReservationsTab id={id}/>
    }
  }

  const baseUrl = `/dashboard/manage/${id}`
  return(
    <div className='management-board'> 
      <StatusCards
        id={id}
        socket={socket}
        availableSlots={availableSlots}
        reservedSlots={reservedSlots}
        occupiedSlots={occupiedSlots}
      />
      <div className="container">
        <div className='grid-x'>
          <div className='cell small-3'>
            <button
              className={tab === 'reservations' ? "tabs active-tabs" : "tabs"}
              onClick={() => navigate(`${baseUrl}/reservations`)}
            >
              Reservations
            </button>
          </div>
          <div className='cell small-3'>
            <button
              className={tab === 'hours' ? "tabs active-tabs" : "tabs"}
              onClick={() => navigate(`${baseUrl}/hours`)}
            >
              Hours
            </button>
          </div>
          <div className='cell small-3'>
            <button
              className={tab === 'status' ? "tabs active-tabs" : "tabs"}
              onClick={() => navigate(`${baseUrl}/status`)}
            >
              Status
            </button>
          </div>
          <div className='cell small-3'>
            <button
              className={tab === 'settings' ? "tabs active-tabs" : "tabs"}
              onClick={() => navigate(`${baseUrl}/settings`)}
            >
              Settings
            </button>
          </div>
        </div>
      </div>
      <div className="content-tabs">
        {renderTab()}
      </div>
    </div>
  );
}
