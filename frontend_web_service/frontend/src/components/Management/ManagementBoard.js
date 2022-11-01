import React, { useEffect }  from 'react';
import { useParams } from 'react-router-dom';
import HoursTab from './Hours/HoursTab';
import ReservationsTab from './Reservations/ReservationsTab';
import SettingsTab from './Settings/SettingsTab';
import { useNavigate } from 'react-router-dom';

export default function ManagementBoard() {
  /* Extracts the ID from the url */
  const { id, tab } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if ( tab === undefined ) {
      // Redirect to default
      navigate('reservations');
    }
  }, [tab, navigate])

  const renderTab = () => {
    switch (tab) {
      case 'reservations': return <ReservationsTab id={id}/>;
      case 'hours': return <HoursTab id={id}/>;
      case 'settings': return <SettingsTab id={id}/>;
      default: return <ReservationsTab id={id}/>
    }
  }

  const baseUrl = `/dashboard/manage/${id}`
  return(
    <div className='management-board'> 
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
