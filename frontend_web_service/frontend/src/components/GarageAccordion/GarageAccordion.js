import React from "react";
import { useState } from "react";


export default function GarageAccordion(){

    const [selected, setSelected] = useState(null)
 

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }

        setSelected(i)


    }




    return (
        <div className='wrapper1'>
            <div className='accordion'>

                {data.map((item, i) => (
                    <div className='item'>
                        <div className='title1' onClick={() => toggle(i)} >
                            <h2>{item.question}</h2>
                            <span>{selected === i ? '-' : '+'}</span>
                    </div>
                    <div className= {selected === i ? 'content show' : 'content'}>{item.answer}</div>
                    </div>
                ))}
                    

            </div>
        </div>

    
    )
}

const data = [

    {

        question: "Garage Las Heras",

        answer:
        "Av Las Heras 1235"
        







    },







]