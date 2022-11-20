import React from "react";
import StatusCard from "./StatusCard";

export default function StatusCards(props) {
  return(
    <div className="status-cards-container">
      <div className="grid-x grid-margin-x align-center">
        <div className="cell small-4">
          <StatusCard text='Available slots' numSlots={props.availableSlots}/>
        </div>
        <div className="cell small-4">
          <StatusCard text='Reserved slots' numSlots={props.reservedSlots}/>
        </div>
        <div className="cell small-4">
          <StatusCard text='Occupied slots' numSlots={props.occupiedSlots}/>
        </div>
      </div>
    </div>
  );
}