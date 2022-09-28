import React from 'react';
import ParkingHeader from '../Dashboard/ParkingHeader';

export default function GarageContainer() {
  return(
    <div className='grid-container'>
      <div className='grid-x'>         
        <div className='cell medium-4 small-12'>
          <ParkingHeader title="Total Cocheras: 50"  color="rgba(48,104,247,1)" font="white"/>
        </div>
        <div className='cell medium-4 small-12'>
          <ParkingHeader title="Cocheras disponibles: 23"  color="rgba(48,104,247,1)" font="white"/>
        </div>
        <div className='cell medium-4 small-12'>
          <ParkingHeader title="Cocheras ocupadas: 27"  color="rgba(48,104,247,1)" font="white"/>          
        </div>
      </div>
    </div>
  );
}