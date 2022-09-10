import React from "react";
import ModifyA from './ModifyA';
import ModifyE from './ModifyE';
import {useState} from 'react'


function ModifyProfile(){

    const[clickA,setClickA] = useState(false);
    const[clickB,setClickB] = useState(false);

    if(clickA){
        return(<ModifyA></ModifyA>);
    }
    else if (clickB){
        return(<ModifyE></ModifyE>);
    }
    return(

        <div>

            <button onClick={() => {setClickA(!clickA)}}>Asociado</button>
            <button onClick = {() => {setClickB(!clickB)}}>Estacionamiento</button>
        </div>
    );

   
    
}

export default ModifyProfile;