import React from "react";
import { useState } from 'react';
import AddParking from "../AddParking/AddParking";


export default function PopUp(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <AddParking />
                <button className="close-btn" onClick={() => props.setTrigger(false)}> close</button> 
            </div>
        </div>
    ) : "";
}