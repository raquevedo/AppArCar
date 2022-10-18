import React, { useEffect } from "react";
import { useState } from "react";
import { getParkingData } from "../../controllers/parkingController";
import ParkingAccordionItem from "./ParkingAccordionItem";

export default function ParkingAccordion(){
  const [parkingData, setParkingData] = useState([])

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await getParkingData()
    console.log(data[0]);
    setParkingData(data);
  }

  return (
    <div className='custom-accordion'>
      {parkingData.map((garage, index) => (
        <div key={index}>
          <ParkingAccordionItem garage={garage} index={index}/>
        </div>
      ))}
    </div>
  )
}

