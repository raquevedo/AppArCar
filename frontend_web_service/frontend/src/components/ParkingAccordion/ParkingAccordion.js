import React, { useEffect } from "react";
import { useState } from "react";
import fetchToken from '../../utils/fetchToken'
import { getParkingData } from "../../controllers/parkingController";

export default function ParkingAccordion(){

  const [selected, setSelected] = useState(null)
  const [parkingData, setParkingData] = useState([])


  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const data = await getParkingData()
    setParkingData(data);
  }

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null)
    }

    setSelected(i)
  }

  return (
    <div className='wrapper1'>
      <div className='accordion'>
        {parkingData.map((item, i) => (
          <div className='item'>
            <div className='title1' onClick={() => toggle(i)} >
              <h2>{item.parkingInfo.businessName}</h2>
              <span>{selected === i ? '-' : '+'}</span>
            </div>
            <div className= {selected === i ? 'content show' : 'content'}>
              {item.parkingInfo.streetName}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

