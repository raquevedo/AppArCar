import React from "react";

export default function StatusCard(props) {
  return(
    <div className="status-card with-shadow">
      <p className='text-center' id='status-text'>{props.text}: {props.numSlots}</p>
    </div>
  );
}