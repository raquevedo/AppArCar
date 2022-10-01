import React from "react";
import { useState } from 'react';
import AddGarageForm from "../AddGarage/AddGarage";


export default function PopUp(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <AddGarageForm/>
                <button className="close-btn" onClick={() => props.setTrigger(false)}> close</button> 
            </div>
        </div>
    ) : "";
}