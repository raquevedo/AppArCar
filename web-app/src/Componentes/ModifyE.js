import React from "react";
import '../Style/ButtonSend.css';
import {useState} from 'react';
import '../Style/Enter.css';
import '../Style/ModifyE.css';

function ModifyE(){

    const[Name,setName] = useState('');
    const[Surname,setSurname] = useState('');
    const[Direction,setDirection] = useState('');
    const[AmountPlaces,setAmountPlaces] = useState(0);
    
    
    const InformationSend = {
        name:'',
        surname:'',
        direction:0,
        amountplaces:0
    };

    function EnterName(e){
        setName(e.target.value)
    }

    
    function EnterSurname(e){
        setSurname(e.target.value)
    }

    
    function EnterDirection(e){
        setDirection(e.target.value)
    }

    
    function EnterAmountPlaces(e){
        setAmountPlaces(e.target.value)
    }

    function EnterInformationSend(e){
        
        e.preventDefault();
        InformationSend.name = Name;
        InformationSend.surname = Surname;
        InformationSend.direction = Direction;
        InformationSend.amountplaces= AmountPlaces;

        // console.log(InformacionEnviar);

        
       
    }


    function ClickProfileE(){

        
        window.location.reload();
    }

    return(
        <div>
        <div className="ContainerRegistry">
            <form className="Ingresos">
                <input

                placeholder
                type='text'
                onChange={EnterName}
                className='InputModifyE1'
                
                />

                <input

                placeholder
                type='text'
                onChange={EnterSurname}
                className='InputModifyE2'

                />

                <input

                placeholder
                type='text'
                onChange={EnterDirection}
                className='InputModifyE3'

                />

                <input

                placeholder
                type='number'
                onChange={EnterAmountPlaces}
                className='InputModifyE4'

                />
                
            </form>

            <button className="BotonModifyE"  onClick={EnterInformationSend}>Enviar</button>
            
        </div>

        <button className="BotonRegistry" onClick = {ClickProfileE}>Perfil</button>

        </div>
    );
}

export default ModifyE;