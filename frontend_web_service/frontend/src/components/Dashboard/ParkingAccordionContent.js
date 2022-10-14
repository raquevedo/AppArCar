import React from 'react';
import { Link } from 'react-router-dom';

export default function ParkingAccordionContent(props) {
  return(
    <div>
      <div className='grid-x'>
        <div className='cell small-3'>
          Available slots: {props.garage.status.qtyFreeSlots}
        </div>
        <div className='cell small-3'>
          Reserved slots: {props.garage.status.qtyReservedSlots}
        </div>
        <div className='cell small-3'>
          Available slots: {props.garage.status.qtyBussySlots}
        </div>
        <div className='cell small-3'>
          <Link to={'manage/${props.garage.parkingInfo.id}'}>Manage</Link>
        </div>
      </div>
    </div>
  )
}