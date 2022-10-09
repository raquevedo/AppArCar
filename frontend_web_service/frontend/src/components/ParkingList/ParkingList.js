import React from 'react';
import styled from 'styled-components';
import { useState, useEffect, useRef } from 'react';
import PopUp from '../PopUp/PopUp';
import ParkingAccordion from '../ParkingAccordion/ParkingAccordion';

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
  const [buttonPopup, setButtonPopup] = useState(false);
  return(
    <div className='grid-container'>
      <div className='grid-y'>
        <div className='cell'>
            <div className="title"><h1> Your Parkings: </h1></div>
            
            <div><ParkingAccordion /></div>
            <div className='add-button'>
                <Button onClick={() => setButtonPopup(true)}>
                    + Add Parking
                </Button>
                    <div>
                    <PopUp trigger={buttonPopup} setTrigger={setButtonPopup} />
                </div>
                </div>
         </div>
         </div>
    </div>
  );
}