import React from "react";
import {useState} from 'react';
import '../Style/ButtonSend.css';
import {useNavigate} from 'react-router-dom';
import '../Style/Enter.css';
import '../Style/RegistryA.css';


function RegistryE(){

    const[Name,setName] = useState('');
    const[Surname,setSurname] = useState('');
    const[Direction,setDirection] = useState('');
    const[AmountPlaces,setAmountPlaces] = useState(0);
    let navigate = useNavigate();
    
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

        //console.log(InformacionEnviar);

        if((InformationSend.name != '' ) && (InformationSend.surname != '' ) && (InformationSend.direction != '' ) && (InformationSend.amountplaces != '' )){

            navigate('/');
    
        }

        
    }

    

        
    

    
    

    return(
        <div>
        <div className="ContainerRegistry">
            <form className="Ingresos">
                <input

                placeholder='Nombre'
                type='text'
                onChange={EnterName}
                className='InputModifyE1'
                
                />

                <input

                placeholder='Apellido'
                type='text'
                onChange={EnterSurname}
                className='InputModifyE2'

                />

                <input

                placeholder='Direccion'
                type='text'
                onChange={EnterDirection}
                className='InputModifyE3'

                />

                <input

                placeholder='Plazas'
                type='number'
                onChange={EnterAmountPlaces}
                className='InputModifyE4'

                />
                
            </form>

            <button className="BotonModifyE"  onClick={EnterInformationSend}>Enviar</button>
            
        </div>

        <button className="BotonRegistry" onClick={() => {navigate('/registry')}}>Volver Registro</button>

        </div>
    );
}

export default RegistryE;