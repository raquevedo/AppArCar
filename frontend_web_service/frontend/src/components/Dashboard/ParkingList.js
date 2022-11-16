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
    <div id='parking-view-body'>
      <div className='grid-x align-center'>
        <div className='cell large-9 small-12'>
          <h1 className="text-form"> Your Parkings: </h1>
        </div>
        <div className='cell large-3 small-6'>
        <button className='button' onClick={() => setShowModal(true)}>+ Add Parking</button>
          { showModal && <AddParkingModal parkingData={parkingData} setShowModal={setShowModal} setParkingData={setParkingData}/> }
        </div>
      </div>
      <div>
        <ParkingAccordion parkingData={parkingData}/>
      </div>
    </div>
  );
}