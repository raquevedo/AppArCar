import React from "react";
import { useState } from "react";
import ParkingAccordionContent from "./ParkingAccordionContent";

export default function ParkingAccordionItem(props) {
  const [isActive, setIsActive] = useState(false)

  return(
    <div className='custom-accordion-item ' key={props.garage.parkingInfo.id}>
      <div className='custom-accordion-title ' onClick={() => setIsActive(!isActive)}>
        <div className='grid-x acordeon bn24 grid-margin-x grid-padding-x'>
          <div className='cell small-6 '>
            <h2>{props.garage.parkingInfo.businessName}</h2>
          </div>
          <div className='cell small-5'>
            Status: {props.garage.status.status}
          </div>
          <div className='cell small-1'>
            <h2>{isActive ? '-' : '+'}</h2>
          </div>
        </div>
      </div>
      {isActive && 
        <div className="custom-accordion-content">
          <ParkingAccordionContent garage={props.garage} />
        </div>}
    </div>
  );
}
