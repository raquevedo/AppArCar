import React, { useState }  from 'react';
import { useParams } from 'react-router-dom';
import HoursTab from './Hours/HoursTab';
import ReservationsTab from './Reservations/ReservationsTab';

export default function ManagementBoard() {
  /* Extracts the ID from the url */
  const { id } = useParams();
  const [toggleState, setToggleState] = useState('reservations');


  const toggleTab = (index) => {
    setToggleState(index);
  };

  return(
    <div> 
      <div className="container">
        <div className="bloc-tabs">
          <div className='grid-x'>
            <div className='cell small-3'>
              <button
                className={toggleState === 'reservations' ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab('reservations')}
              >
                Reservations
              </button>
            </div>
            <div className='cell small-3'>
              <button
                className={toggleState === 'hours' ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab('hours')}
              >
                Hours
              </button>
            </div>
            <div className='cell small-3'>
              <button
                className={toggleState === 'settings' ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab('settings')}
              >
                Settings
              </button>
            </div>
            <div className='cell small-3'>
              <button
                className={toggleState === 'status' ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab('status')}
              >
                Status
              </button>
            </div>
        </div>
      </div>

      <div className="content-tabs">
        { toggleState === 'reservations' && 
          <ReservationsTab id={id}/>
        }
        { toggleState === 'hours' && 
          <HoursTab id={id}/>
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
