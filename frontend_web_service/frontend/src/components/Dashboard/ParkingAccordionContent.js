import React from 'react';
import { Link } from 'react-router-dom';

export default function ParkingAccordionContent(props) {

  const manageLink = (garageId) => {
    return `manage/${props.garage.parkingInfo.id}`
  }

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
          Busy slots: {props.garage.status.qtyBusySlots}
        </div>
        <div className='cell small-3'>
          <Link className='button' to={`manage/${props.garage.parkingInfo.id}`}>
            Manage
          </Link>
        </div>
      </div>
    </div>
  )
}