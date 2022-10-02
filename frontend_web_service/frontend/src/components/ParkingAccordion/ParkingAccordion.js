import React from "react";
import { useState } from "react";

export default function ParkingAccordion(parkingData){

const [selected, setSelected] = useState(null)

console.log(parkingData)

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
