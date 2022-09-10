import React from "react";
import {useState} from 'react';
import '../Style/ButtonSend.css';
import '../Style/Enter.css';
import '../Style/ModifyA.css';




function ModifyA(){

    const [NameBrand,setNameBrand] = useState('');
    const [NameHolder,setNameHolder] = useState('');
    const [SurnameHolder,setSurnameHolder] = useState('');
    const [DniHolder,setDniHolder] = useState(0);
    const [BusinessName,setBusinessName] = useState(0);
    const [Cuit,setCuit] = useState(0);
    const [Direction,setDirection] = useState(0);
    
    
    const InformationSend = {
        namebrand:'',
        nameholder:'',
        surnameholder:'',
        dniholder:0,
        businessname:'',
        cuit:0,
        direction:0
    }

  
    
    function EnterNameBrand(e){

        setNameBrand(e.target.value);

    }

    function EnterNameHolder(e){

        setNameHolder(e.target.value);

    }

    function EnterSurnameHolder(e){

        setSurnameHolder(e.target.value);

    }

    function EnterDniHolder(e){

        setDniHolder(e.target.value);

    }

    function EnterCuit(e){

        setCuit(e.target.value);

    }

    function EnterBusinessName(e){

        setBusinessName(e.target.value);

    }

    function EnterDirection(e){

        setDirection(e.target.value);

    }

    function EnterInformation(e){

        e.preventDefault();
        InformationSend.nameBrand = NameBrand;
        InformationSend.nameholder = NameHolder;
        InformationSend.surnameholder = SurnameHolder;
        InformationSend.dniholder = DniHolder;
        InformationSend.businessname = BusinessName;
        InformationSend.cuit = Cuit;
        InformationSend.direction = Direction;

        //console.log(InformacionEnviar);

        
    }

   
    function ClickProfileA(){

        
        window.location.reload();
    }
    

    return(

    <div>
        <div className="ContainerRegistry">
                <form className="Ingresos">
                    <input
                            placeholder
                            type='text'
                            onChange={EnterNameBrand}
                            className='InputModifyA1'
                            />
                        
                        <input
                            placeholder
                            type='text'
                            onChange={EnterNameHolder}
                            className='InputModifyA2'
                            />

<                       input
                            placeholder
                            type='text'
                            onChange={EnterSurnameHolder}
                            className='InputModifyA3'
                            />

                        <input
                            placeholder
                            type='number'
                            onChange={EnterDniHolder}
                            className='InputModifyA4'
                            />

                        <input
                            placeholder
                            type='number'
                            onChange={EnterCuit}
                            className='InputModifyA5'
                            />

                        <input
                            placeholder
                            type='text'
                            onChange={EnterBusinessName}
                            className='InputModifyA6'
                            />

                        <input
                            placeholder
                            type='number'
                            onChange={EnterDirection}
                            className='InputModifyA7'
                            />
    
                </form>
                
                <button className="BotonModifyE" onClick={EnterInformation}>Enviar</button>
               
                
        </div>
       
        <button className="BotonRegistry" onClick = {ClickProfileA}>Perfil</button>

        </div>

    );
}

export default ModifyA;
