import React from "react";
import ParkingAccordionItem from "./ParkingAccordionItem";

export default function ParkingAccordion(props){
  return (
    <div class="grid-container-full acordeon-main">
    <div className='cell custom-accordion '>
      {props.parkingData.map((garage, index) => (
        <div key={index}>
          <ParkingAccordionItem garage={garage} index={index}/>
        </div>
      ))}
    </div>
    </div>
  )
}
