import React from "react";
import { Link } from "react-router-dom";

export default function ParkingAccordionContent(props) {
  return (
    <div>
      <div className="grid-x grid-margin-x grid-padding-x">
        <div className="cell large-3 small-3">
          <h4 className="vertical-center">
            <span>Available slots: </span>
            <span>{props.garage.status.qtyFreeSlots}</span>
          </h4>
        </div>
        <div className="cell large-3 small-3">
          <h4 className="vertical-center">
            <span>Reserved slots: </span>
            <span>{props.garage.status.qtyReservedSlots}</span>
          </h4>
        </div>
        <div className="cell large-3 small-3">
          <h4 className="vertical-center">
            <span>Busy slots: </span>
            <span>{props.garage.status.qtyBusySlots}</span>
          </h4>
        </div>
        <div className="cell large-3 small-3">
          <Link to={`manage/${props.garage.parkingInfo.id}`}>
            <button className="accordion-button">Manage</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
