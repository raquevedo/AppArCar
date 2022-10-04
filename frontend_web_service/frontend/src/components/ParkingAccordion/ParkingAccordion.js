import React, { useEffect } from "react";
import { useState } from "react";


export default function ParkingAccordion(){

const [selected, setSelected] = useState(null)
const [parkingData, setParkingData] = useState([])


useEffect(() => {
    fetchData()
}, [])

const fetchData = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts')
    .then(data => data.json())
    setParkingData(data)
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
                            <h2>{item.title}</h2>
                            <span>{selected === i ? '-' : '+'}</span>
                    </div>
                    <div className= {selected === i ? 'content show' : 'content'}>{item.body}</div>
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
