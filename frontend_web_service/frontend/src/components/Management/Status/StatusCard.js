import React from "react";

export default function StatusCard(props) {
  return(
    <div>
      <p className='text-center'>{props.text}: {props.numSlots}</p>
    </div>
  );
}