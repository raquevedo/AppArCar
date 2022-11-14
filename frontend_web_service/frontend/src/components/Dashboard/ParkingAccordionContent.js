import React from "react";
import { Link } from "react-router-dom";

const linksidecell = {
  textDecoration: "none",
  color: "white",
  background: "transparent",
  fontSize: "20px",
};

export default function ParkingAccordionContent(props) {
  return (
    <div>
      <div className="grid-x grid-margin-x grid-padding-x">
        <div className="cell large-3 small-3">
          <h4 className="center-pad">Available slots: </h4>
          <h4>{props.garage.status.qtyFreeSlots}</h4>
        </div>
        <div className="cell large-3 small-3">
          <h4>Reserved slots: </h4>
          <h4>{props.garage.status.qtyReservedSlots}</h4>
        </div>
        <div className="cell large-3 small-3">
          <h4>Busy slots: </h4>
          <h4>{props.garage.status.qtyBusySlots}</h4>
        </div>
        <div className="cell large-3 small-3">
          <Link to={`manage/${props.garage.parkingInfo.id}`}>
            <button className="button">Manage</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
