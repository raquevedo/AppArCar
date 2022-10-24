import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AddParkingModal from './AddParkingModal';
import ParkingAccordion from './ParkingAccordion';
import { getParkingData } from '../../controllers/parkingController';

const Button = styled.button`
background-color: green;
color: white;
font-size: 20px;
padding: 10px 60px;
border-radius: 5px;
margin: 10px 0px;
cursor: pointer;
`;

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
    <div className='grid-y'>
      <div className='cell'>
        <div className='grid-x'>
          <div className='cell large-9 small-12'>
            <h1> Your Parkings: </h1>
          </div>
          <div className='cell large-3 small-6'>
            <Button onClick={() => setShowModal(true)}>+ Add Parking</Button>
            { showModal && <AddParkingModal parkingData={parkingData} setShowModal={setShowModal} setParkingData={setParkingData}/> }
          </div>
        </div>
      </div>
      <div className='cell'>
        <ParkingAccordion parkingData={parkingData}/>
      </div>
    </div>
  );
}