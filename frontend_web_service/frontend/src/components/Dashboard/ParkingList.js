import React, { useState } from 'react';
import styled from 'styled-components';
import AddParkingModal from '../AddParkingModal/AddParkingModal';
import ParkingAccordion from './ParkingAccordion';

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
  const [showModal, setShowModal] = useState(false);
  return(
    <div className='grid-container'>
      <div className='grid-y'>
        <div className='cell'>
          <div className='grid-x'>
            <div className='cell large-8 small-12'>
              <h1> Your Parkings: </h1>
            </div>
            <div className='cell large-4 small-6'>
              <Button onClick={() => setShowModal(true)}>+ Add Parking</Button>
              { showModal && <AddParkingModal setShowModal={setShowModal}/> }
            </div>
          </div>
        </div>
        <div className='cell'>
          <ParkingAccordion />
        </div>
      </div>
    </div>
  );
}