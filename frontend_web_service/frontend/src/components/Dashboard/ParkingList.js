import React, { useState } from 'react';

import AddParkingModal from './AddParkingModal';
import ParkingAccordion from './ParkingAccordion';


export default function ParkingList() {
  const [showModal, setShowModal] = useState(false);
  return(
    <div className='grid-y grid-margin-x grid-padding-x conterneitorParking'>
      <div className='cell '>
        <div className='grid-x align-center'>
          <div className='cell large-9 small-12'>
            <h1> Your Parkings: </h1>
          </div>
          <div className='cell large-3 small-6 '>
            <button className='bn632-hover bn24' onClick={() => setShowModal(true)}>+ Add Parking</button>
            { showModal && <AddParkingModal setShowModal={setShowModal}/> }
          </div>
        </div>
      </div>
      <div className='cell large-3 small-6'>
        <ParkingAccordion />
      </div>
    </div>
  );
}