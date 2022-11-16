import React, { useState, useEffect } from 'react';
import AddParkingModal from './AddParkingModal';
import ParkingAccordion from './ParkingAccordion';
import { getParkingData } from '../../controllers/parkingController';


export default function ParkingList() {
  const [parkingData, setParkingData] = useState([])

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let data = await getParkingData();
    data = await data.json();
    setParkingData(data);
  }
  const [showModal, setShowModal] = useState(false);
  return(
    <div className='dark-background'>
      <div className='white-background with-shadow' id='parking-view-body'>
        <div className='grid-x'>
          <div className='cell small-10'>
            <h1 className="text-form"> Your Parkings: </h1>
          </div>
          <div className='cell small-2'>
            <button id='add-parking-button' onClick={() => setShowModal(true)}>+ Add Parking</button>
          </div>
        </div>
        
        { showModal && <AddParkingModal parkingData={parkingData} setShowModal={setShowModal} setParkingData={setParkingData}/> }
        <ParkingAccordion parkingData={parkingData}/>
      </div>
    </div>
  );
}