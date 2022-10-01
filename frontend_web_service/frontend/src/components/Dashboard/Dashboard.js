import React from 'react';
import GarageContainer from '../GarageContainer/GarageContainer';

export default function Dashboard({ partnerData, setPartnerData }) {
  return(
    <div className='grid-container'>
      <div className='grid-y'>
        <div className='cell'>
          <GarageContainer />
        </div>
      </div>
    </div>
  );
}