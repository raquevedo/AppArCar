import React from "react";
import { useState } from "react";
import ParkingAccordionContent from "./ParkingAccordionContent";

export default function ParkingAccordionItem(props) {
  const [isActive, setIsActive] = useState(false);

  return(
    <div>
      <div className="accordion-item" key={props.garage.parkingInfo.id}>
        <div onClick={() => setIsActive(!isActive)}>
          <div className='grid-x grid-margin-x grid-padding-x'>
            <div className='cell small-6 '>
              <h2>{props.garage.parkingInfo.businessName}</h2>
            </div>
            <div className='cell small-1 center'>
              <div className="container-flex">
                {props.garage.status.status === "active"
                  ? <div id='green-circle' className="vertical-center"></div>
                  : <div id='red-circle' className="vertical-center"></div>
                }
              </div>
            </div>
            <div className='cell small-4 center'>
              <div id='status'>
                {props.garage.status.status === "active"
                  ? <h2 id='status-text-enabled'>Open</h2>
                  : <h2 id='status-text-disabled'>Closed</h2>
                }
              </div>
            </div>
            <div className='cell small-1 center'>
              <h2>{isActive ? '-' : '+'}</h2>
            </div>
          </div>
        </div>
        {isActive && 
          <div className="custom-accordion-content">
            <ParkingAccordionContent garage={props.garage} />
          </div>
        }
      </div>
    </div>
  );
}
