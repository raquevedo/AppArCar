import React, { useEffect } from "react";
import { useState } from "react";


export default function ParkingAccordion(){

const [selected, setSelected] = useState(null)
const [parkingData, setParkingData] = useState([])


useEffect(() => {
    fetchData()
}, [])

const fetchData = async () => {
    const data = await fetch('http://0.0.0.0:8000/parking/parking/')
    const parking = await data.json()
    setParkingData(parking)
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
                            <h2>{item.Parking_name}</h2>
                            <span>{selected === i ? '-' : '+'}</span>
                    </div>
                    <div className= {selected === i ? 'content show' : 'content'}>{item.street_name}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}





//function AddParking1(){
    //const parking = {
      //park: ParkingName,
      //street: streetName
   // }
  
   // return(
    //  data.push(parking)
   // )
 // }
