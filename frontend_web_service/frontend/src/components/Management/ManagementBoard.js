import React from 'react';
import { useState } from 'react'
import Settings from '../Forms/Settings';
import styled from 'styled-components';
import TextCard from './TotalSlots';
import TotalSlots from './TotalSlots';
import AvailableSlots from './AvailableSlots';
import OccupiedSlots from './OccupiedSlots';


export default function ManagementBoard() {
  /* Extracts the ID from the url */
  const [toggleState, setToggleState] = useState(1);
  const Button1 = styled.button`
    background-color: green;
    color: white;
    font-size: 20px;
    padding: 10px 60px;
    border-radius: 20px;
    margin: 10px 60px;
    cursor: pointer;
    margin-left: 30%;
  `;
  const Button2 = styled.button`
    background-color: red;
    color: white;
    font-size: 20px;
    padding: 10px 60px;
    border-radius: 20px;
    margin: 10px 0px;
    cursor: pointer;
  `;


    

  

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
          'hours'
        </div>
        }
        { toggleState === 'settings' && 
          <div>
            <Settings/>
          </div>
        }
        { toggleState === 'status' && 
          <div>
            <Button1>Set Parking Active</Button1>
            <Button2>Set Parking Inactive</Button2>
            <TotalSlots/>
            <AvailableSlots/>
            <OccupiedSlots/>
          </div>
        }
        </div>
      </div>
  </div>
 );
}
