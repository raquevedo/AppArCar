import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react'
import Hours from "react-hours";

export default function ManagementBoard() {
  /* Extracts the ID from the url */
  const { id } = useParams();
  const [toggleState, setToggleState] = useState(1);
  const [hour, setHour] = useState('');

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
                className={toggleState === 'notifications' ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab('notifications')}
              >
                Notifications
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
        { toggleState === 'notifications' && 
          <div>
            'notifications'
          </div>
        }
        { toggleState === 'hours' && 
          <div>
            <Hours>
           <input value={hour} onChange={e => setHour(e.target.value)} /> 
           </Hours> 
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
