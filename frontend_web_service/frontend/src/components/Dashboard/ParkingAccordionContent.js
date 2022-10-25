import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import Button from '@mui/material/Button';



const linksidecell = {
 
  textDecoration: "none",
  color: 'white',
  background: "transparent",
  fontSize: "20px"

};

export default function ParkingAccordionContent(props) {
  return(
    <div>
      <div className="grid-x   grid-margin-x grid-padding-x' acordeon-body">
        <div className="cell large-2 small-3 align-center justify-center manage-cell">
          <h4>Available slots: {props.garage.status.qtyFreeSlots}</h4>
        </div>
        <div className="cell large-2 small-3 align-center justify-center manage-cell">
          <h4>Reserved slots: {props.garage.status.qtyReservedSlots}</h4>
        </div>
        <div className="cell large-2 small-3 align-center justify-center manage-cell">
        <h3>Busy slots: {props.garage.status.qtyBusySlots}</h3>
        </div>
        <div className='cell large-2 small-3 align-center justify-center manage-link-cell'>
          <Link style={linksidecell} className='button' to={`manage/${props.garage.parkingInfo.id}`}>
          <h3>Manage</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}
