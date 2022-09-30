import React from 'react';
import GarageContainer from '../GarageContainer/GarageContainer';
import PopUp from '../PopUp/PopUp';
import styled from 'styled-components';
import { useState } from 'react';
export default function Dashboard({ partnerData, setPartnerData }) {

const Button = styled.button`
background-color: black;
color: white;
font-size: 20px;
padding: 10px 60px;
border-radius: 5px;
margin: 10px 0px;
cursor: pointer;
`;

const [buttonPopup, setButtonPopup] = useState(false);

  return(
    <div className='grid-container'>
      <div className='grid-y'>
        <div className='cell'>
          <GarageContainer />
          <Button onClick={() => setButtonPopup(true)}>
            Add Garage
          </Button>
          <PopUp trigger={buttonPopup} setTrigger={setButtonPopup}/>
        </div>
      </div>
    </div>
  );

}