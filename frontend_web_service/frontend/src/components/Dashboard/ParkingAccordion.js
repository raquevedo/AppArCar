import React from "react";
import ParkingAccordionItem from "./ParkingAccordionItem";

export default function ParkingAccordion(props){
  return (
    <div className="accordion">
      {props.parkingData.map((garage, index) => (
        <div key={index}>
          <ParkingAccordionItem garage={garage} index={index}/>
        </div>
      ))}
    </div>
  )
}
